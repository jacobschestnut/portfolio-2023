<template>
  <a :href="props.link" class="project-card-link">
    <div @mouseover="handleMouseOver" @mouseout="handleMouseOut" class="project-card w-80 h-20 rounded-xl z-0 shadow-xl">
      <div class="flex flex-col justify-center items-center h-full p-12" v-if="!isHovered">
        <h1 class="text-center">{{ props.name }}</h1>
      </div>
      <div class="flex justify-center items-center p-12" v-if="isHovered">
        <p>{{ props.summary }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps([
  'name', 
  'summary', 
  'link'
]);

const isHovered = ref(false);

const handleMouseOver = () => {
  setTimeout(() => {
    isHovered.value = true;
  }, 100); 
};

const handleMouseOut = () => {
  setTimeout(() => {
    isHovered.value = false;
  }, 100);
};
</script>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
}

.project-card {
  height: 20rem;
  background-color: #ff8e72;
  transition: background-color 0.1s;
  cursor: pointer;
}

.project-card:hover {
  background-color: #ed6a5e;
}

h1 {
  font-size: 1.5rem;
  color: #ed6a5e;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .project-card {
    height: 30rem;
  }
}
</style>
