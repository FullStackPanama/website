---
title: "[EXAMPLE POST] Building Scalable APIs with GraphQL and TypeScript"
description: "Learn how to create robust and type-safe GraphQL APIs using TypeScript and modern best practices"
excerpt: "Discover how to leverage the power of GraphQL and TypeScript to build maintainable, performant, and type-safe APIs that your frontend teams will love."
pubDate: 2024-02-18
cardImage: "@/images/blog/example.webp"
cardImageAlt: "Code editor showing GraphQL schema and TypeScript types"
readTime: 8
category: ["Backend"]
tags: ["graphql", "typescript", "api-design", "performance"]
---

# Building Modern APIs with GraphQL and TypeScript

## Why GraphQL?

REST APIs have served us well, but modern applications need more flexibility. GraphQL solves the common problems of:

- Over-fetching data 📦
- Multiple round-trips 🔄
- Rigid endpoints 🗄️

### Type Safety with TypeScript

Using TypeScript with GraphQL gives us **end-to-end type safety**. Here's a simple example:

```typescript
import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Add custom aliases for languages
      // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages
      // https://shiki.style/guide/load-lang#custom-language-aliases
      langAlias: {
        cjs: "javascript"
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
```
