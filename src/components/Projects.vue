<template>
    <div class="projects mb-64">
        <div class="fade-in project-grid-container flex flex-col justify-center items-center">
            <div class="project-grid grid grid-cols-2 gap-20">
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
  