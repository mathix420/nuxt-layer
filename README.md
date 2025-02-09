# Opinionated Nuxt Starter Layer

> Quickly start your Nuxt project with the best modules and tooling.

- [`@nuxt/content`](https://nuxt.com/modules/content)
- [`@nuxtjs/mdc`](https://nuxt.com/modules/mdc)
- [`@nuxt/scripts`](https://nuxt.com/modules/scripts)
- [`@nuxtjs/seo`](https://nuxt.com/modules/seo)
- [`@nuxt/fonts`](https://nuxt.com/modules/fonts)
- [`@nuxt/image`](https://nuxt.com/modules/image)
- [`nuxt-headlessui`](https://nuxt.com/modules/headlessui)
- [`@nuxtjs/tailwindcss`](https://nuxt.com/modules/tailwindcss)
  - [Blank config](/tailwind.config.cjs)
  - With Plugins:
    - [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
    - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
    - [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
    - [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)
- [`@nuxt/icon`](https://nuxt.com/modules/icon)
- [`@nuxt/eslint`](https://nuxt.com/modules/eslint)
  - With [stylistic preferences](/nuxt.config.ts) and a [few rules](/eslint.config.mjs)
  - With [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)

## Get started

### Install the layer with your preferred package manager.
```bash
bun i @mathix420/nuxt-layer
# or
npm i @mathix420/nuxt-layer
```

Update your nuxt config to extend from this layer.
```ts
export default defineNuxtConfig({
  extends: [
    "@mathix420/nuxt-layer",
  ]
})
```

### Generate typings and init modules.
```bash
bunx nuxi prepare
# or
npx nuxi prepare
```

### Load eslint presets.
```bash
# may not be needed anymore
bun pm trust @mathix420/nuxt-layer
```
```js
// eslint.config.mjs
// @ts-check
// @ts-ignore
import cfg from "@mathix420/nuxt-layer/eslint.config.mjs";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  cfg,
  {
    settings: {
      tailwindcss: {
        config: ".nuxt/tailwind/postcss.mjs",
      },
    },
  },
);
```

### Copy VS Code settings, be careful they'll be overwritten.
```bash
cp -r node_modules/@mathix420/nuxt-layer/.vscode .
```

### Migrate to nuxt v4.
```ts
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
})
```

```bash
bunx codemod@latest nuxt/4/migration-recipe
```

### Setup renovate

`renovate.json`:
```json
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
        "github>mathix420/nuxt-layer"
    ]
}
```

## Dev

### Setup

Make sure to install dependencies:

```bash
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
bun dev
```

### Upgrade deps

```bash
bunx npm-check-updates -i --format group
```

Check out the [Nuxt layer documentation](https://nuxt.com/docs/getting-started/layers) for more information.
