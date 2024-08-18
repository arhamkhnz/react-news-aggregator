import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import pluginTailwind from "eslint-plugin-tailwindcss"
import pluginPrettier from "eslint-plugin-prettier"
import configPrettier from "eslint-config-prettier"

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"], ignores: ["node_modules/", "dist/", "build/"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        process: "readonly",
        module: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    plugins: {
      tailwindcss: pluginTailwind,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginTailwind.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "prettier/prettier": "warn",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
