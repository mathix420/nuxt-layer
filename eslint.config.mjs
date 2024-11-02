// @ts-check
// @ts-ignore
import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "tailwindcss/no-custom-classname": ["warn", {
        whitelist: ["scrollbar-hide", "scrollbar-default"],
      }],
    },
  },
  ...tailwind.configs["flat/recommended"],
);
