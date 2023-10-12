<template>
    <div class="projects mb-64">
        <div class="fade-in project-grid-container flex flex-col justify-center items-center">
            <!-- <div class="flex justify-items-start w-full mb-5">
                <h1 class="text-5xl tracking-tight">Some projects.</h1>
            </div> -->
            <div class="project-grid grid grid-cols-2 gap-20">
                <!-- <h1 class="text-5xl mb-5">Things I've worked on:</h1> -->
                <ProjectCard v-for="project in projects" :key="project.name" :name="project.name" :summary="project.summary"
                    :link="project.link" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.json';
import useFadeIn from '../composables/fadein';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: projects
        };
    },
    setup() {
        const { fadeInElements } = useFadeIn();

        return {
            fadeInElements
        };
    }
}
</script>
  
<style scoped>

h1 {
    color: #ffaf87;
}

</style>
  