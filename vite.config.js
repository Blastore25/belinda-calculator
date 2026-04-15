import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base keeps assets working on GitHub Pages project sites.
  base: './',
  server: {
    allowedHosts: ['.loca.lt', 'localhost', '127.0.0.1']
  }
});
