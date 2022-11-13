<template>
    <form action="https://google.com/search" method="get">
        <input
            type="text"
            name="q"
            placeholder="Search"
            class="transition-all w-full font-bold bg-black border-0 px-0 text-white text-[5rem] md:text-[10rem] lg:text-[15rem] placeholder-tracking-tighter placeholder-font-bold placeholder-text[5rem] md:placeholder-text-[10rem] lg:placeholder-text-[15rem] active:border-0 active:outline-0 focus:border-0 focus:border-b focus:border-gray-800 focus:outline-0 hover:bg-gray-900 hover:bg-opacity-20 hover:cursor-pointer" />
    </form>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SearchSection',
})
</script>
