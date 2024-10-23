# Mathix Nuxt Layer

## Get started

```bash
bun i @mathix420/nuxt-layer
```

```ts
export default defineNuxtConfig({
  extends: [
    '@mathix420/nuxt-layer',
  ]
})
```

### This layer will add the following modules:

- [`@nuxt/content`](https://nuxt.com/modules/content)
- [`@nuxt/scripts`](https://nuxt.com/modules/scripts)
- [`@nuxtjs/seo`](https://nuxt.com/modules/seo)
- [`@nuxt/fonts`](https://nuxt.com/modules/fonts)
- [`@nuxt/image`](https://nuxt.com/modules/image)
- [`nuxt-headlessui`](https://nuxt.com/modules/headlessui)
- [`@nuxtjs/tailwindcss`](https://nuxt.com/modules/tailwindcss)
  - [Blank config](/tailwind.config.mjs)
- [`@nuxt/icon`](https://nuxt.com/modules/icon)
- [`@nuxt/eslint`](https://nuxt.com/modules/eslint)
  - With [stilistic preferences](/nuxt.config.ts) and a [few rules](/eslint.config.mjs)

## Setup

Make sure to install dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Upgrade deps

```bash
bunx npm-check-updates -i --format group
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.