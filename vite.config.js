import { defineConfig } from 'vite'

export default defineConfig({
  base: '/restaurant-johnlegrec/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
