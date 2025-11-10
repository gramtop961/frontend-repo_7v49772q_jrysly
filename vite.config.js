import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev server configured to accept the preview host domain used by the sandbox
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
    cors: true,
    // Explicitly allow the hosted preview domain to connect
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ta-01k9pn25n4kck8sjwxx1b6z8bc-3000.wo-zs3wsa8dv9gmms3i94h9qt6ny.w.modal.host'
    ]
  }
})
