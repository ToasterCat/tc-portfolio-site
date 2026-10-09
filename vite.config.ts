/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // same port as the old CRA dev server
    strictPort: true,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: 'build', // same output folder as CRA, so nothing downstream changes
    // Inline only tiny images (under 1 KB) into the JS bundle; anything bigger
    // loads as its own file, only on the pages that use it. (Was
    // IMAGE_INLINE_SIZE_LIMIT in CRA's .env.)
    assetsInlineLimit: 1024,
  },
  test: {
    globals: true, // describe/test/expect without imports, as under Jest
    environment: 'node', // the data tests need no DOM
  },
});
