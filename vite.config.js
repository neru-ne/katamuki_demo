import { defineConfig } from 'vite';
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    }
  },
  //github pages用
  base: './',
  build:{
    outDir: 'docs',
    assetsDir: '',
  }
});
