// @ts-check
// @ts-ignore
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import withNuxt from "./.nuxt/eslint.config.mjs";

const recommendedBetterTailwindcssRules = betterTailwindcss.configs?.recommended?.rules ?? {};
const recommendedNoUnregistered
  = recommendedBetterTailwindcssRules["better-tailwindcss/no-unregistered-classes"] ?? "error";

export default withNuxt(
  {
    settings: {
      "better-tailwindcss": {
        tailwindConfig: "tailwind.config.cjs",
      },
    },
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      ...recommendedBetterTailwindcssRules,
      "better-tailwindcss/no-unregistered-classes": [recommendedNoUnregistered, {
        ignore: ["scrollbar-hide", "scrollbar-default"],
      }],
    },
  },
);
