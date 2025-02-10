// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
  ],

  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
      },
    },
  },

  ogImage: {
    zeroRuntime: true,
  },
});
