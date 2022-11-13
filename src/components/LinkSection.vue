<template>
    <section class="mb-8">
        <ul
            class="list-none m-0 p-0 flex flex-row flex-wrap gap-4 md:gap-3 lg:gap-0 w-full md:w-1/2">
            <li v-for="link in links" class="w-1/3 md:w-1/4">
                <a
                    :href="link.url"
                    class="text-white font-sans no-underline font-medium tracking-tight hover:underline">
                    <span class="opacity-50 mr-2">
                        {{ link.id }}
                    </span>
                    <span>
                        {{ link.name }}
                    </span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'LinkSection',
    data() {
        return {
            links: {
                youtube: {
                    url: 'https://youtube.com',
                    name: 'YouTube',
                    id: '1',
                },
                github: {
                    url: 'https://github.com',
                    name: 'Github',
                    id: '2',
                },
                twitter: {
                    url: 'https://twitter.com',
                    name: 'Twitter',
                    id: '3',
                },
                twitch: {
                    url: 'https://twitch.tv',
                    name: 'Twitch',
                    id: '4',
                },
                netlify: {
                    url: 'https://netlify.com',
                    name: 'Netlify',
                    id: '5',
                },
                cattie: {
                    url: 'https://cattieoutfit.com',
                    name: 'Cattie Outfit',
                    id: '6',
                },
                uptime: {
                    url: 'https://uptimerobot.com',
                    name: 'UptimeRobot',
                    id: '7',
                },
                photo: {
                    url: 'https://photo.google.com',
                    name: 'Photo',
                    id: '8',
                },
            },
        }
    },
})
</script>
