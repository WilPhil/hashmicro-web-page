import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/hashmicro-web-page/',
  plugins: [
    tailwindcss(),
  ],
})
