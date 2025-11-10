import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified server config to ensure the preview domain is accepted by default
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    // Use Vite defaults for HMR and file watching; environments may inject their own settings
    // Removing allowedHosts to avoid blocking unknown preview subdomains
    cors: true
  }
})
