import { defineConfig } from "eslint";

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-unresolved": "error", // Check for unresolved imports
    // Add other rules you need here
  },
});
