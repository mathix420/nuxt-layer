import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-headlessui",
    "@nuxt/eslint",
    "@nuxt/icon",
  ],

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  content: {
    experimental: {
      nativeSqlite: true,
    },
  },
  compatibilityDate: "2024-04-03",

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

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
