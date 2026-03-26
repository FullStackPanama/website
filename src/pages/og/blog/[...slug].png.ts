import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { SITE } from "@data/constants";
import { formatDate } from "@utils/utils";

export const prerender = true;

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const TITLE_MAX_LINES = 4;
const CHARS_PER_LINE = 24;
const brandIconPath = path.join(process.cwd(), "src/images/icon.png");

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export async function GET({ props }: { props: { post: CollectionEntry<"blog"> } }) {
  const { post } = props;
  const backgroundPath = await getCardImagePath(post);
  const author = post.data.author ? await getEntry("members", post.data.author) : null;
  const titleLines = wrapTitle(post.data.title, CHARS_PER_LINE, TITLE_MAX_LINES);
  const titleFontSize = titleLines.length > 3 ? 52 : 60;
  const titleStartY = titleLines.length > 3 ? 340 : 360;
  const footerDate = formatDate(post.data.pubDate);
  const footerAuthor = author?.data.nombre ?? SITE.author;
  const brandIconUri = await getBrandIconUri();

  const background = await sharp(backgroundPath)
    .resize(OG_WIDTH, OG_HEIGHT, {
      fit: "cover",
      position: "centre",
    })
    .modulate({
      brightness: 0.82,
      saturation: 1.05,
    })
    .png()
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#020617" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617" stop-opacity="0" />
          <stop offset="100%" stop-color="#020617" stop-opacity="0.92" />
        </linearGradient>
      </defs>
      <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#topFade)" />
      <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#bottomFade)" />
      <rect x="56" y="34" width="456" height="92" rx="28" fill="rgba(2, 6, 23, 0.84)" />
      <image x="78" y="40" width="80" height="80" preserveAspectRatio="xMidYMid meet" href="${brandIconUri}" />
      <text x="176" y="92" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700">FullStack Panamá</text>
      <circle cx="1118" cy="84" r="18" fill="#FACC15" />
      <text x="78" y="${titleStartY}" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="${titleFontSize}" font-weight="700">
        ${titleLines
          .map(
            (line, index) =>
              `<tspan x="78" dy="${index === 0 ? 0 : Math.round(titleFontSize * 1.2)}">${escapeXml(line)}</tspan>`
          )
          .join("")}
      </text>
      <rect x="78" y="530" width="1044" height="2" fill="rgba(255,255,255,0.28)" />
      <text x="78" y="575" fill="#E2E8F0" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600">${escapeXml(footerAuthor)}</text>
      <text x="1122" y="575" text-anchor="end" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="500">${escapeXml(footerDate)}</text>
    </svg>
  `);

  const image = await sharp(background)
    .composite([{ input: overlay }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

async function getCardImagePath(post: CollectionEntry<"blog">) {
  const entryPath = path.join(process.cwd(), "src/content/blog", post.id);
  const source = await fs.readFile(entryPath, "utf-8");
  const match = source.match(/^cardImage:\s*["'](.+?)["']\s*$/m);

  if (!match) {
    throw new Error(`Could not resolve cardImage for "${post.slug}"`);
  }

  return resolveContentAssetPath(entryPath, match[1]);
}

function resolveContentAssetPath(entryPath: string, assetPath: string) {
  if (assetPath.startsWith("@/")) {
    return path.join(process.cwd(), "src", assetPath.slice(2));
  }

  if (assetPath.startsWith("/")) {
    return path.join(process.cwd(), "public", assetPath.slice(1));
  }

  return path.resolve(path.dirname(entryPath), assetPath);
}

function wrapTitle(title: string, charsPerLine: number, maxLines: number) {
  const words = title.trim().split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";
  let wordIndex = 0;

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    wordIndex += 1;

    if (nextLine.length <= charsPerLine || currentLine.length === 0) {
      currentLine = nextLine;
      continue;
    }

    lines.push(currentLine);
    currentLine = word;

    if (lines.length === maxLines - 1) {
      break;
    }
  }

  const remainingWords = words.slice(wordIndex);
  const lastLine = [currentLine, ...remainingWords].filter(Boolean).join(" ").trim();

  if (lastLine) {
    lines.push(lastLine);
  }

  return lines.slice(0, maxLines).map((line, index, allLines) => {
    if (index === allLines.length - 1 && allLines.length === maxLines && line.length > charsPerLine) {
      return `${line.slice(0, charsPerLine - 1).trimEnd()}…`;
    }

    return line;
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function getBrandIconUri() {
  const png = await fs.readFile(brandIconPath);
  return `data:image/png;base64,${png.toString("base64")}`;
}
