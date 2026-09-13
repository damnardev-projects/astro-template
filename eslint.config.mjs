import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
];
