import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
export const metadata = {
  title: 'EVCharging', // Default title
  description: 'Code with nextjs my airmjay',
  icons: {
    icon: '/logo.png', // Path to your PNG in /public
  },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
