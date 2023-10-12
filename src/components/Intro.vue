<script>
import { ref } from 'vue';
import useFadeIn from '../composables/fadein';

export default {
  setup() {
    const { fadeInElements } = useFadeIn();

    return {
      fadeInElements
    };
  },
};
</script>

<template>
  <div class="intro flex items-center justify-center h-screen w-screen">
    <div class="flex flex-col mr-96">
      <h1 class="fade-in text-7xl mb-5 tracking-tight">Hey, I'm <a class="special-word"
          href="https://www.linkedin.com/in/jacob-chestnut/">Jake</a>.</h1>
      <h2 class="fade-in text-7xl mb-5 tracking-tight">I like to code.</h2>
      <p class="fade-in max-w-xl">I'm a software engineer that enjoys creating user experiences. This website was coded by
        me, utilizing <a class="special-word" href="https://vuejs.org/">Vue.js</a> and <a class="special-word"
          href="https://tailwindcss.com/">Tailwind CSS</a>. Currently, I'm working at <a class="special-word"
          href="https://www.fbitn.com/">Farm Bureau Insurance</a> as an Application Developer.</p>
    </div>
  </div>
</template>

<style scoped>
.intro {
  background: #FF8E72;
  background: -webkit-linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
  background: -moz-linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
  background: linear-gradient(to bottom left, #FF8E72  30%, #377771 0%);
}
</style>