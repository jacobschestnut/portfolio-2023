<template>
    <div class="projects lg:mb-64">
        <div class="fade-in project-grid-container flex flex-col justify-center items-center">
            <div v-if="windowWidth >= 1024" class="project-grid grid grid-cols-2 gap-20">
                <ProjectCard v-for="project in projects" :key="project.name" :name="project.name" :summary="project.summary"
                    :link="project.link" />
            </div>
            <div v-else-if="windowWidth < 1024" class="flex flex-col justify-center">
                <ProjectCard class="mb-6" v-for="project in projects" :key="project.name" :name="project.name" :summary="project.summary"
                    :link="project.link" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import projectsData from '../data/projects.json';
import useFadeIn from '../composables/fadein';

const fadeInElements = useFadeIn();

const projects = ref(projectsData);

const windowWidth = ref(window.innerWidth);
</script>
  
<style scoped>
h1 {
    color: #ffaf87;
}
</style>
