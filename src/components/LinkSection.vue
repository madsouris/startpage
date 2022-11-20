<template>
    <section class="mb-8">
        <ul
            class="list-none m-0 p-0 flex flex-row flex-wrap gap-4 md:gap-3 lg:gap-x-0 lg:gap-y-3 w-full md:w-2/3">
            <li v-for="link in links" class="w-1/3 md:w-1/4">
                <a
                    @click="goTo(link.url)"
                    class="text-white font-sans no-underline font-medium tracking-tight hover:underline hover:cursor-pointer">
                    <span
                        class="text-gray-500 font-mono tracking-tighter bg-gray-900 p-1 rounded mr-2 text-[0.7rem]">
                        Alt + {{ link.id }}
                    </span>
                    <span>
                        {{ link.name }}
                    </span>
                </a>
            </li>
        </ul>
        <p class="text-white font-sans no-underline font-medium tracking-tight">
            <span
                class="text-gray-500 font-mono tracking-tighter bg-gray-900 p-1 rounded mr-2 text-[0.7rem]">
                Alt + K
            </span>
            <span> To toggle search </span>
        </p>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import tinykeys from 'tinykeys'

// Local JSON
import links from '../data.json'

export default defineComponent({
    name: 'LinkSection',
    mounted() {
        //this function is used to capture keypress on window load
        //Using minus 1 to access it's correct position, i messed up thinking it counts from 1, but it's from 0
        tinykeys(window, {
            'Alt+K': () => {
                let search = document.getElementById('search')
                search.focus()
            },
            'Alt+Digit1': () => {
                this.goTo(this.links[1 - 1].url)
            },
            'Alt+Digit2': () => {
                this.goTo(this.links[2 - 1].url)
            },
            'Alt+Digit3': () => {
                this.goTo(this.links[3 - 1].url)
            },
            'Alt+Digit4': () => {
                this.goTo(this.links[4 - 1].url)
            },
            'Alt+Digit5': () => {
                this.goTo(this.links[5 - 1].url)
            },
            'Alt+Digit6': () => {
                this.goTo(this.links[6 - 1].url)
            },
            'Alt+Digit7': () => {
                this.goTo(this.links[7 - 1].url)
            },
            'Alt+Digit8': () => {
                this.goTo(this.links[8 - 1].url)
            },
        })
    },
    methods: {
        //This function is used to open link based on key pressed
        //to change link and it's name, edit links objects below
        goTo(link) {
            window.open(link, '_self')
        },
    },
    data() {
        return {
            command: '',
            // This is from local JSON
            links: links,
        }
    },
})
</script>
