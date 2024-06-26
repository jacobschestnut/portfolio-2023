<template>
  <div class="main fade-in w-8/12 lg:mb-64 flex flex-col items-center">
    <div class="divider" id="divider1"></div>
    <div class="about shadow-xl flex flex-col justify-center items-center lg:py-14 lg:px-24 lg:rounded-xl">
      <div class="flex flex-row justify-center items-center">
        <div class="text-container flex flex-col lg:mr-10">
          <p class="max-w-xl mb-5 text-sm lg:text-base">
            I've been dabbling in Web Development, building gaming PCs and
            modifying/creating video games since 2011. It wasn't until I
            graduated with a completely separate degree in
            <a
              class="special-word"
              href="https://www.mtsu.edu/programs/audio-production/"
              >Audio Engineering</a
            >
            that I considered making a career out of Software Development.
          </p>
          <p class="max-w-xl mb-5 text-sm lg:text-base">
            Since graduating from
            <a class="special-word" href="https://nashvillesoftwareschool.com/"
              >Nashville Software School</a
            >
            in 2022, I've begun my professional journey as an Application
            Developer at a major insurance company while also diving into iOS
            Development and other personal projects. I'm always looking for ways
            to expand my skillset even more!
          </p>
          <p class="max-w-xl mb-5 text-sm lg:text-base">Check out some of my projects below!</p>
        </div>
        <div class="overflow-hidden h-80">
          <img v-if="windowWidth >= 1024"
            class="object-cover w-full h-full rounded-xl"
            src="/assets/images/portrait.jpg"
            alt="profile-picture"
          />
        </div>
      </div>
    </div>
    <div class="divider " id="divider2"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useFadeIn from "../composables/fadein";

const { fadeInElements } = useFadeIn();

const windowWidth = ref(window.innerWidth);
</script>

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

.divider {
  height: 0.1rem;
  background-color: #ffaf87;
  border-radius: 50px;
}

#divider1 {
  width: 125%;
  margin: 1rem 0 1rem 0;
}

#divider2 {
  width: 75%;
  margin: 1rem 0 1rem 0;
}

@media (min-width: 1024px) {
  #divider1 {
    width: 125%;
    margin: 0 0 6rem 0;
  }

  #divider2 {
    width: 75%;
    margin: 6rem 0 0 0;
  }
}

@media (max-width: 1024px) {
  .text-container {
    width: 100vw;
    padding: 1.5rem;
  }
}

</style>
