# Opinionated Nuxt Starter Layer

> Quickly start your Nuxt project with the best modules and tooling.

- [`@nuxt/content`](https://nuxt.com/modules/content)
- [`@nuxt/scripts`](https://nuxt.com/modules/scripts)
- [`@nuxtjs/seo`](https://nuxt.com/modules/seo)
- [`@nuxt/fonts`](https://nuxt.com/modules/fonts)
- [`@nuxt/image`](https://nuxt.com/modules/image)
- [`nuxt-headlessui`](https://nuxt.com/modules/headlessui)
- [Tailwind CSS](https://tailwindcss.com/) via [`@tailwindcss/vite`](https://github.com/tailwindlabs/tailwindcss/tree/main/packages/%40tailwindcss/vite)
  - [Blank config](/tailwind.config.cjs)
  - With Plugins:
    - [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
    - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
    - [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
    - [tailwind-scrollbar-hide](https://github.com/reslear/tailwind-scrollbar-hide)
- [`@nuxt/icon`](https://nuxt.com/modules/icon)
- [`@nuxt/eslint`](https://nuxt.com/modules/eslint)
  - With [stylistic preferences](/nuxt.config.ts) and a [few rules](/eslint.config.mjs)
  - With [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)

## Nuxt Image v2 upgrade

`@nuxt/image@^2` now ships with this layer so you immediately benefit from the new TypeScript-first API (`defineProvider`, typed `useImage()`/`$img` helpers) and the upgraded IPX v3 backend + server utilities. You can drop the snippets from the launch blog straight into your app layer:

```ts
// app/providers/my-provider.ts
import { defineProvider } from "@nuxt/image/runtime";

export default defineProvider({
  name: "my-provider",
  getImage(src, { modifiers, baseURL }) {
    return {
      url: new URL(src, baseURL).toString(),
      isStatic: true,
    };
  },
});
```

Nuxt Image v2 aligns its default responsive screen sizes with Tailwind CSS which removes the legacy `xs` (320px) and `xxl` (2560px) breakpoints. If you need those sizes (or any other custom grid), add them in your own config layer:

```ts
export default defineNuxtConfig({
  extends: ["@mathix420/nuxt-layer"],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      xxl: 2560,
    },
  },
});
```

Keep an eye on the [official migration guide](https://image.nuxt.com/getting-started/migration) for more advanced recipes such as Shopify/GitHub providers, direct Nitro usage, or tailoring the breakpoint map.

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
      "better-tailwindcss": {
        tailwindConfig: "tailwind.config.cjs",
      },
    },
  },
);
```

### Copy VS Code settings, be careful they'll be overwritten.
```bash
cp -r node_modules/@mathix420/nuxt-layer/.vscode .
```

### Upgrade to Nuxt v4
Run the official upgrade command to pull in the latest Nuxt release, then execute Nuxt's codemod recipe to automatically apply the framework changes that shipped with v4.

```bash
npx nuxt upgrade
# or
bun x nuxt upgrade
```

```bash
bunx codemod@0.18.7 nuxt/4/migration-recipe
```

> Tip: after upgrading, you can preview upcoming Nuxt 5 behavior by setting `future: { compatibilityVersion: 5 }` in your own project.

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
