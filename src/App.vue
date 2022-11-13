<template>
    <main
        class="flex flex-col bg-black min-h-screen justify-center text-white px-4 md:px-16">
        <LinkSection />
        <SearchSection />
    </main>
    <footer class="fixed bottom-0 w-full bg-black">
        <FooterSection />
    </footer>
</template>

<script setup>
import SearchSection from './components/SearchSection.vue'
import LinkSection from './components/LinkSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
</style>
