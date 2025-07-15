import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off', // Disable the warning for <img> usage
  },
}];

export default eslintConfig;
