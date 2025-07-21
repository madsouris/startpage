import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
      AstroPWA({
          registerType: 'autoUpdate',
          includeAssets: ['icon.svg', 'icon.png'],
          manifest: {
              name: 'Startpage',
              short_name: 'Startpage',
              description: 'Personal browser startpage',
              theme_color: '#000000',
              icons: [
                  {
                      src: 'icon-192x192.png',
                      sizes: '192x192',
                      type: 'image/png',
                  },
                  {
                      src: 'icon-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                  },
              ],
          },
          workbox: {
              navigateFallback: '/',
              globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
          },
          devOptions: {
              enabled: true,
              navigateFallbackAllowlist: [/^\//],
          },
          experimental: {
              directoryAndTrailingSlashHandler: true,
          },
      }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})