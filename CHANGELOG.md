# Changelog

## Unreleased

### Features

* adopt the Tailwind-aligned screen presets that Nuxt Image v2 ships with; override them from your app if you still need xs/xxl

### Docs

* document how this layer benefits from @nuxt/image v2, with examples for defining providers and restoring custom screen maps
* outline the recommended `nuxt upgrade` + codemod workflow for migrating projects to Nuxt 4

## [4.0.0](https://github.com/mathix420/nuxt-layer/compare/v3.0.1...v4.0.0) (2025-11-17)


### ⚠ BREAKING CHANGES

* update packageManager version to bun@1.3.2

### Features

* update Nuxt configuration and dependencies for version 4.0.0 ([eeaeb43](https://github.com/mathix420/nuxt-layer/commit/eeaeb43ef0b55b2b1caa3bce3156edef44f07c04))


### Bug Fixes

* update packageManager version to bun@1.3.2 ([436be3f](https://github.com/mathix420/nuxt-layer/commit/436be3feef60dcc4166daf583396ea3aad001a6f))

## [4.0.0](https://github.com/mathix420/nuxt-layer/compare/v3.0.0...v4.0.0) (2025-11-17)


### ⚠ BREAKING CHANGES

* require Nuxt 4 runtime instead of Nuxt 3 + compatibility flag

### Features

* document the Nuxt 4 upgrade workflow in the README

### Bug Fixes

* remove `future.compatibilityVersion` flag now that Nuxt 4 is native
* switch to Nuxt 4 tsconfig project references for better type safety

## [3.0.1](https://github.com/mathix420/nuxt-layer/compare/v3.0.0...v3.0.1) (2025-02-10)


### Bug Fixes

* update node version ([d52ef8e](https://github.com/mathix420/nuxt-layer/commit/d52ef8e83275e833e53f0ea33d4f04ee4f466b4a))

## [3.0.0](https://github.com/mathix420/nuxt-layer/compare/v2.0.1...v3.0.0) (2025-02-10)


### ⚠ BREAKING CHANGES

* remove unused @nuxtjs/mdc module and update package.json structure

### Bug Fixes

* remove unused @nuxtjs/mdc module and update package.json structure ([4d7f0be](https://github.com/mathix420/nuxt-layer/commit/4d7f0bebb3670cf2e1709ab13e7ef0d85795aec0))

## [2.0.1](https://github.com/mathix420/nuxt-layer/compare/v2.0.0...v2.0.1) (2025-02-09)


### Bug Fixes

* update tailwind CSS config file path in VSCode settings ([84143df](https://github.com/mathix420/nuxt-layer/commit/84143dfc9bba005e09aff04159a51ef6a781e7a4))

## [2.0.0](https://github.com/mathix420/nuxt-layer/compare/v1.4.5...v2.0.0) (2025-02-09)


### ⚠ BREAKING CHANGES

* drop legacy eslint configs, requires ESLint v9 and ESM

### Features

* drop legacy eslint configs, requires ESLint v9 and ESM ([470d3b6](https://github.com/mathix420/nuxt-layer/commit/470d3b6da95715c58aaf257b09babe2b767129bc))

## [1.4.5](https://github.com/mathix420/nuxt-layer/compare/v1.4.4...v1.4.5) (2025-02-09)


### Bug Fixes

* put @nuxtjs/seo on top of the modules ([9132723](https://github.com/mathix420/nuxt-layer/commit/91327235ad2b384cca40809d4c5bd2430c83d3c4))

## [1.4.4](https://github.com/mathix420/nuxt-layer/compare/v1.4.3...v1.4.4) (2025-01-28)


### Bug Fixes

* remove release please manifest ([74bf50c](https://github.com/mathix420/nuxt-layer/commit/74bf50ca2e837842f2a0e711bdcf635b1073dd61))

## [1.4.3](https://github.com/mathix420/nuxt-layer/compare/v1.4.2...v1.4.3) (2024-12-13)


### Bug Fixes

* standardize quotes in README example for consistency ([95b68e7](https://github.com/mathix420/nuxt-layer/commit/95b68e7fdc29ecb9f91d820cb6093f72bd3f3666))

## [1.4.2](https://github.com/mathix420/nuxt-layer/compare/v1.4.1...v1.4.2) (2024-11-25)


### Reverts

* override of ajv ([fa49aca](https://github.com/mathix420/nuxt-layer/commit/fa49aca6c577b96bf4eca94c49a1c8e454e600c4))

## [1.4.1](https://github.com/mathix420/nuxt-layer/compare/v1.4.0...v1.4.1) (2024-11-15)


### Bug Fixes

* Override ajv to v8 & upgrade other deps ([326d080](https://github.com/mathix420/nuxt-layer/commit/326d0808b518533cc2fe82f1078d1c4034d5a9e9))

## [1.4.0](https://github.com/mathix420/nuxt-layer/compare/v1.3.0...v1.4.0) (2024-11-02)


### Features

* Add tailwindcss plugin tailwind-scrollbar-hide ([f7fafa9](https://github.com/mathix420/nuxt-layer/commit/f7fafa931f12f889c0d82c82e5a4247f047c24f8))

## [1.3.0](https://github.com/mathix420/nuxt-layer/compare/v1.2.2...v1.3.0) (2024-10-25)


### Features

* Add @nuxtjs/mdc module ([6747b49](https://github.com/mathix420/nuxt-layer/commit/6747b49058db705917805ceb1beacb993a7ace9e))
* Enable zero-runtime option for ogImage by default ([112e9ad](https://github.com/mathix420/nuxt-layer/commit/112e9ad7ef71e63e54d867ba5aec881a827725ed))

## [1.2.2](https://github.com/mathix420/nuxt-layer/compare/v1.2.1...v1.2.2) (2024-10-24)


### Bug Fixes

* **npm:** add .nuxt/ directory in package.json `files` ([f3147f3](https://github.com/mathix420/nuxt-layer/commit/f3147f3c48a19190566e3d7c6f0dd5da3c0c36ad))

## [1.2.1](https://github.com/mathix420/nuxt-layer/compare/v1.2.0...v1.2.1) (2024-10-24)


### Bug Fixes

* imports in package.json ([f17db69](https://github.com/mathix420/nuxt-layer/commit/f17db69bcf1e848b6b369925557473bea41647ef))

## [1.2.0](https://github.com/mathix420/nuxt-layer/compare/v1.1.1...v1.2.0) (2024-10-24)


### Features

* add tailwindcss eslint plugin and add some tailwindcss plugins ([0600d6f](https://github.com/mathix420/nuxt-layer/commit/0600d6fc3dec2be094bdad9a61172d696ac59d72))


### Bug Fixes

* **docs:** wrong code syntax ([b3c3fed](https://github.com/mathix420/nuxt-layer/commit/b3c3fed06eb2a37e4d78cc57991229cac71e5166))

## [1.1.1](https://github.com/mathix420/nuxt-layer/compare/v1.1.0...v1.1.1) (2024-10-23)


### Bug Fixes

* **ci:** add BUN_AUTH_TOKEN env var to bun publish command ([e1d68e5](https://github.com/mathix420/nuxt-layer/commit/e1d68e511037b2917befc391da498bd7db3370d5))

## [1.1.0](https://github.com/mathix420/nuxt-layer/compare/v1.0.1...v1.1.0) (2024-10-23)


### Features

* use nuxt4 folder structure ([2215ee4](https://github.com/mathix420/nuxt-layer/commit/2215ee4046432832b19bff7585f04319c8805a3f))

## [1.0.1](https://github.com/mathix420/nuxt-layer/compare/v1.0.0...v1.0.1) (2024-10-23)


### Bug Fixes

* **ci:** added bunfig.toml file ([4635e99](https://github.com/mathix420/nuxt-layer/commit/4635e997b3b7fc7208e51b640a8aab58bae287e8))
* **ci:** added fine grained github token instead of default GITHUB_TOKEN ([9ae63d4](https://github.com/mathix420/nuxt-layer/commit/9ae63d4b9b14a52541b3ae8817406b067254f85c))

## 1.0.0 (2024-10-23)


### ⚠ BREAKING CHANGES

* first version

### Features

* first version ([e0e2bab](https://github.com/mathix420/nuxt-layer/commit/e0e2bab48019914e0723b00c4424f5a3af5efa90))
