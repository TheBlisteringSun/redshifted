import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      '@next/next/no-img-element': 'off', // Disable the warning for <img> usage
    },
  },
];

// Use module.exports for compatibility with ESLint (CommonJS)
module.exports = eslintConfig;
