import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Unocss(),
    VitePWA({ registerType: 'autoUpdate',injectRegister: 'auto',workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
    manifest: {
        name: 'Minimal Startpage',
        short_name: 'Startpage',
        description: 'Minimal startpage, with hotkey to jump to your services faster.',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      } })
    ],
  server: {
    host: true
  }
})
