import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getCollection, type CollectionEntry } from "astro:content";

export const prerender = true;

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const brandIconPath = path.join(process.cwd(), "src/images/icon.png");

export async function getStaticPaths() {
  const members = await getCollection("members");

  return members.map((member) => ({
    params: { slug: member.slug },
    props: { member },
  }));
}

export async function GET({ props }: { props: { member: CollectionEntry<"members"> } }) {
  const { member } = props;
  const memberImagePath = await getMemberImagePath(member);
  const brandIconUri = await getBrandIconUri();
  const memberImage = await sharp(memberImagePath)
    .resize(320, 320, {
      fit: "cover",
      position: "centre",
    })
    .png()
    .toBuffer();

  const memberImageUri = `data:image/png;base64,${memberImage.toString("base64")}`;
  const headline = member.data.empresa?.cargo ?? member.data.profesion ?? "Miembro de Full Stack Panamá";
  const technologies = (member.data.tecnologias ?? []).slice(0, 3);

  const image = await sharp({
    create: {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      channels: 4,
      background: "#020617",
    },
  })
    .composite([
      {
        input: Buffer.from(createMemberOgSvg({
          brandIconUri,
          memberImageUri,
          member,
          headline,
          technologies,
        })),
      },
    ])
    .webp({
      quality: 84,
    })
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

function createMemberOgSvg({
  brandIconUri,
  memberImageUri,
  member,
  headline,
  technologies,
}: {
  brandIconUri: string;
  memberImageUri: string;
  member: CollectionEntry<"members">;
  headline: string;
  technologies: string[];
}) {
  const nameLines = wrapText(member.data.nombre, 12, 2);
  const roleLines = wrapText(headline, 28, 1);
  const techMarkup = technologies.map((tech, index) => {
    const x = 84 + index * 96;
    const y = 482;
    const width = Math.max(72, Math.min(108, 32 + tech.length * 8));
    const label = truncateText(tech, 10);

    return `
      <rect x="${x}" y="${y}" width="${width}" height="44" rx="22" fill="#132940" stroke="rgba(105,119,137,0.12)" />
      <text x="${x + width / 2}" y="${y + 28}" text-anchor="middle" fill="#D9E7FC" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700">${escapeXml(label)}</text>
    `;
  }).join("");

  return `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canvasBackground" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#071729" />
          <stop offset="100%" stop-color="#0C1D31" />
        </linearGradient>
        <linearGradient id="portraitFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#071729" stop-opacity="0.88" />
          <stop offset="42%" stop-color="#071729" stop-opacity="0.48" />
          <stop offset="100%" stop-color="#071729" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#canvasBackground)" />
      <rect x="0" y="0" width="736" height="${OG_HEIGHT}" fill="#08182A" />
      <image x="706" y="0" width="494" height="${OG_HEIGHT}" preserveAspectRatio="xMidYMid slice" href="${memberImageUri}" />
      <rect x="662" y="0" width="230" height="${OG_HEIGHT}" fill="url(#portraitFade)" />

      <image x="84" y="58" width="66" height="66" preserveAspectRatio="xMidYMid meet" href="${brandIconUri}" />
      <text x="168" y="101" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">FullStack Panamá</text>

      <text x="84" y="254" fill="#DDE8FF" font-family="Arial, Helvetica, sans-serif" font-size="${nameLines.length > 1 ? 92 : 104}" font-weight="800" letter-spacing="-3">
        ${nameLines.map((line, index) => `<tspan x="84" dy="${index === 0 ? 0 : 86}">${escapeXml(line)}</tspan>`).join("")}
      </text>

      <text x="84" y="${nameLines.length > 1 ? 430 : 384}" fill="#8B97AA" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="500">
        ${roleLines.map((line, index) => `<tspan x="84" dy="${index === 0 ? 0 : 34}">${escapeXml(line)}</tspan>`).join("")}
      </text>

      ${techMarkup}

      <circle cx="96" cy="592" r="22" fill="rgba(253,192,3,0.14)" />
      <circle cx="96" cy="592" r="7" fill="#FFD16C" />
      <text x="130" y="600" fill="#B0BAC9" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="500">xopa.dev/miembros/${escapeXml(member.slug)}</text>
    </svg>
  `;
}

async function getMemberImagePath(member: CollectionEntry<"members">) {
  const entryPath = path.join(process.cwd(), "src/content/members", member.id);
  const source = await fs.readFile(entryPath, "utf-8");
  const match = source.match(/^imagen:\s*["'](.+?)["']\s*$/m);

  if (!match) {
    throw new Error(`Could not resolve imagen for member "${member.slug}"`);
  }

  return resolveContentAssetPath(entryPath, match[1]);
}

function resolveContentAssetPath(entryPath: string, assetPath: string) {
  if (assetPath.startsWith("@memberImages/")) {
    return path.join(process.cwd(), "src/images/members", assetPath.slice("@memberImages/".length));
  }

  if (assetPath.startsWith("@/")) {
    return path.join(process.cwd(), "src", assetPath.slice(2));
  }

  if (assetPath.startsWith("/")) {
    return path.join(process.cwd(), "public", assetPath.slice(1));
  }

  return path.resolve(path.dirname(entryPath), assetPath);
}

async function getBrandIconUri() {
  const png = await fs.readFile(brandIconPath);
  return `data:image/png;base64,${png.toString("base64")}`;
}

function wrapText(value: string, charsPerLine: number, maxLines: number) {
  const words = value.trim().split(/\s+/);
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

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1)}…`;
}


function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
