import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), AstroPWA()],
    serviceWorker: true,
    devToolbar: {
        enabled: true,
    },
})
