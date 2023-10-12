<template>
  <div class="navbar flex items-center justify-end w-screen h-20 px-14">
    <ul class="flex items-center justify-center">
      <li class="mr-6">
        <a href="https://www.linkedin.com/in/jacob-chestnut/">LinkedIn</a>
      </li>
      <li class="mr-6">
        <a href="https://github.com/jacobschestnut">GitHub</a>
      </li>
      <li class="mr-6">
        <button class="resume rounded-xl" @click="openPdf">Resume</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const openPdf = () => {
  const pdfUrl = '/assets/documents/Resume_Jacob_Chestnut.pdf';

  window.open(pdfUrl, '_blank');
}
</script>

<style scoped>
a,
button {
  margin: 10px;
  font-size: 1.25rem;
  font-weight: 400;
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
  padding: 10px 16px;
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

a {
  padding: 10px;
  color: #ed6a5e;
}

a:hover {
  text-decoration: none;
  color: #ffaf87;
}
</style>
