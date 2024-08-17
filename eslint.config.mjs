import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginTailwind from "eslint-plugin-tailwindcss";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      ...pluginTailwind.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn", 
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
