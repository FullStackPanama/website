# Repository Guidelines

## Project Structure & Module Organization
This repository is a single Astro site for `xopa.dev`. Application routes live in `src/pages`, shared layouts in `src/layouts`, and reusable UI in `src/components`. Content collections are defined in `src/content/config.ts` and stored under `src/content/blog`, `src/content/docs`, `src/content/members`, `src/content/products`, and `src/content/insights`. Static assets go in `public/`; optimized images used by Astro live in `src/images`. Shared data files live in `src/data_files`, and utility modules use the `@/*` path aliases from `tsconfig.json`.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Astro dev server.
- `npm run build`: run `astro check`, build the static site, then minify generated HTML with `process-html.mjs`.
- `npm run preview`: serve the production build locally.
- `npx prettier --check .`: verify formatting before committing.

## Coding Style & Naming Conventions
Use 2-space indentation in `.astro`, `.ts`, `.mjs`, and Markdown frontmatter. Prefer TypeScript for utilities and route handlers. Format with Prettier plus `prettier-plugin-tailwindcss`; keep Tailwind utility classes in Prettier’s sorted order. Use PascalCase for Astro components (`HeroSection.astro`), camelCase for utility modules (`navigation.ts`), and kebab-case for content entry filenames (`claude-para-programadores.md`). Follow the existing Spanish-first content style unless a section is already localized differently.

## Testing Guidelines
There is no separate unit-test suite in this repository today. Treat `npm run build` as the required validation step because it includes Astro type/content checks and the production build. When editing content collections, verify schema constraints in `src/content/config.ts`; for example, blog authors must match a member slug and member images must meet the minimum size checks.

## Commit & Pull Request Guidelines
Recent history mixes plain subjects and Conventional Commits, but `feat:`, `fix:`, `refactor:`, and `chore:` are the clearest pattern to follow. Keep subjects short, imperative, and specific, for example `feat: add mentor availability flag`. PRs should include a concise description, linked issue when relevant, screenshots for UI/content changes, and confirmation that `npm run build` and formatting checks passed.

## Content & Configuration Notes
Do not commit secrets; this site is built as static output. Vendor scripts under `public/scripts/vendor` are excluded from TypeScript checks and should only be updated intentionally. If you add a new member or blog post, start from the templates in `src/content/members/_template.md` or `src/content/blog/_example.md`.
