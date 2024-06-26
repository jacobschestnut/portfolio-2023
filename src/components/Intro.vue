<template>
  <div class="intro flex items-center justify-center lg:h-screen w-screen lg:mt-0 mt-20">
    <div class="flex flex-col mx-6 lg:mr-96">
      <h1 class="fade-in text-2xl lg:text-7xl lg:mb-5 mb-1 tracking-tight">Hey, I'm <a class="special-word"
          href="https://www.linkedin.com/in/jacob-chestnut/">Jake</a>.</h1>
      <h2 class="fade-in text-2xl lg:text-7xl lg:mb-5 mb-1 tracking-tight">I like to code.</h2>
      <p class="fade-in text-sm lg:text-lg max-w-xl">I'm a software engineer that enjoys creating user experiences. This website was coded by
        me, utilizing <a class="special-word" href="https://vuejs.org/">Vue.js</a> and <a class="special-word"
          href="https://tailwindcss.com/">Tailwind CSS</a>. Currently, I'm working at <a class="special-word"
          href="https://www.fbitn.com/">Farm Bureau Insurance</a> as an Application Developer.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useFadeIn from '../composables/fadein';

const { fadeInElements } = useFadeIn();
</script>

<style scoped>
@media (min-width: 1024px) {
  .intro {
    background: #FF8E72;
    background: -webkit-linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
    background: -moz-linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
    background: linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
  }
}

</style>
