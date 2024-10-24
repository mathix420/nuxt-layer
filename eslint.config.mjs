// @ts-check
// @ts-ignore
import tailwind from "eslint-plugin-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  ...tailwind.configs["flat/recommended"],
);
