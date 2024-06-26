<template>
  <div class="navbar flex items-center justify-between w-screen h-20 lg:px-14 sm:px-4">
    <Weather />
    <ul class="flex items-center justify-center">
      <li class="lg:mr-6">
        <a href="https://www.linkedin.com/in/jacob-chestnut/">LinkedIn</a>
      </li>
      <li class="lg:mr-6">
        <a href="https://github.com/jacobschestnut">GitHub</a>
      </li>
      <li class="lg:mr-6">
        <button class="resume rounded-xl" @click="openPdf">Resume</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import Weather from './Weather.vue';

  const openPdf = () => {
    const pdfUrl = "/assets/documents/Resume_Jacob_Chestnut.pdf";
    window.open(pdfUrl, "_blank");
  };
</script>

<style scoped>
@media (min-width: 1024px) {
  .resume {
    padding: 10px 16px;
  }
}

.resume {
  background-color: #ed6a5e;
  border-style: none;
  box-sizing: border-box;
  color: #ffaf87;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.resume:hover,
.resume:focus {
  background-color: #ed6a5e87;
  /* color: #ed6a5e; */
}

a, button {
  font-size: 1rem;
  font-weight: 400;
  padding: 5px;
  color: #ed6a5e;
  font-weight: 400;
}

@media (min-width: 1024px) {
  a, button {
    margin: 10px;
    font-size: 1.25rem;
    font-weight: 400;
    padding: 10px;
  }
}

a:hover {
  text-decoration: none;
  color: #ed6a5e87;
}
</style>
