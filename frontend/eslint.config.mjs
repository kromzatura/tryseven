// eslint.config.js
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. Global ignores
  {
    ignores: [".next/", "postcss.config.js", "tailwind.config.js"],
  },

  // 2. Main configuration for all JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Base recommended rules
      ...tsPlugin.configs["eslint-recommended"].rules,
      ...tsPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // --- Our Custom Rules ---
      
      // CORRECTED: This is the correct rule to ban `any`
      "@typescript-eslint/no-explicit-any": "error",
      
      // Warn about unused variables instead of erroring
      "@typescript-eslint/no-unused-vars": "warn",

      // Enforce a consistent import order
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true },
        },
      ],
    },
    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        }
    }
  },

  // 3. Configuration for test files
  {
    files: ["test/**/*.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/*.test.{ts,tsx}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly",
      },
    },
  },

  // 4. Prettier config MUST be last
  prettierConfig,
];
