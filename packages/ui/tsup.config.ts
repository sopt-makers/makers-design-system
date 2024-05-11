import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', "cssVariables.ts"],
  format: ['cjs', 'esm'], // CommonJS와 ES Module 형식으로 출력
  outDir: 'dist',
  dts: true, 
  sourcemap: true, 
  esbuildPlugins: [vanillaExtractPlugin()],
  clean: true, 
  external: ['react', 'react-dom', '@radix-ui/*'], // nodeExternals와 유사하게 외부 모듈을 제외
  onSuccess: 'echo Build completed!', 

  esbuildOptions(options) {
    options.minify = true;
    options.treeShaking = true;
  },
});
