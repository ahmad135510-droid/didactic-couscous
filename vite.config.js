import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isPreview = process.env.BASE44_PREVIEW_MODE === '1'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // In Base44 preview mode, allow the sandbox host domain
    allowedHosts: isPreview && process.env.BASE44_SANDBOX_HOST_DOMAIN
      ? [`.${process.env.BASE44_SANDBOX_HOST_DOMAIN}`]
      : undefined,
  },
})
