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
    <div class="fade-in w-8/12 mb-64">
        <!-- <div class="flex justify-items-start w-full mb-5">
            <h1 class="text-5xl tracking-tight">About me.</h1>
        </div> -->
        <div class="about shadow-xl flex flex-col justify-center items-center py-14 px-24 rounded-xl">
            <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col mr-10">
                    <p class="max-w-xl mb-5">I've been dabbling in Web Development, building gaming PCs and
                        modifying/creating
                        video games since 2011. It wasn't until I graduated with a completely seperate degree in <a
                            class="special-word" href="https://www.mtsu.edu/programs/audio-production/">Audio
                            Engineering</a>
                        that I considered making a career out of Software Development.</p>
                    <p class="max-w-xl mb-5">Since graduating from <a class="special-word"
                            href="https://nashvillesoftwareschool.com/">Nashville Software School</a> in 2022, I've begun my
                        professional
                        journey as an Application Developer at a major insurance company while also diving into iOS
                        Development
                        and other personal projects. I'm
                        always looking for ways to expand my skillset even more!</p>
                    <p class="max-w-xl mb-5">Check out some of my projects below!</p>
                </div>
                <div class="overflow-hidden h-80">
                    <img class="object-cover w-full h-full rounded-xl" src="/assets/images/portrait.jpg"
                        alt="profile-picture">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about {
    background-color: #ed6a5e;
}

a {
    color: #ffaf87;
    text-decoration: underline;
}

a:hover {
    text-decoration: none;
}

h1 {
    color: #ffaf87;
}
</style>