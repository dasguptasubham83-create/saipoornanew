import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This allows process.env.API_KEY to be accessible in the browser
    'process.env': {
      API_KEY: process.env.API_KEY || process.env.GEMINI_API_KEY
    }
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  }
});