import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/use-autofit/index.ts'],
  tsconfig: 'tsconfig.tsdown.json',
  minify: true
});
