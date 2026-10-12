import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Public, statically built corporate website. No API keys or server runtime are required.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
});
