import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://xopa.dev',
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // All urls that don't contain `xx` (language code) after `https://xopa.dev` will be treated as default locale, i.e. `es`
        locales: {
          es: "es", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    starlight({
      title: 'FullStack Panama Docs',
      editLink: {
        baseUrl: 'https://github.com/fullstackpanama/website/edit/main/',
      },
      defaultLocale: "root",
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Guías de Inicio Rápido",
          // translations: {
          //   de: "Schnellstartanleitungen",
          //   es: "Guías de Inicio Rápido",
          //   fa: "راهنمای شروع سریع",
          //   fr: "Guides de Démarrage Rapide",
          //   ja: "クイックスタートガイド",
          //   "zh-cn": "快速入门指南",
          // },
          autogenerate: { directory: "docs/guias" },
        },
        {
          label: "Recursos",
          autogenerate: { directory: "docs/recursos" },
        },
      ],
      social: {
        github: "https://github.com/fullstackpanama",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://xopa.dev" + "/docs-social.webp"
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://xopa.dev" + "/docs-social.webp"
          },
        },
      ],
      plugins: [
        starlightImageZoom(),
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  markdown: {
    shikiConfig: {
      // Choose a dark theme for code blocks
      theme: 'one-dark-pro', // or any other dark theme you prefer
      // Or use different themes for light/dark mode
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
      // Add custom styling
      transformers: [{
        pre(node) {
          // Add custom CSS classes to the pre element
          node.properties.class = 'overflow-x-auto rounded-lg bg-neutral-900 dark:bg-neutral-950 p-4';
        },
        code(node) {
          // Add custom CSS classes to the code element
          node.properties.class = 'text-sm';
        }
      }],
      // Enable word wrap
      wrap: true,
    },
  },
});
