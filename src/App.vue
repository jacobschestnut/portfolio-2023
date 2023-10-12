<template>
  <div id="app">
    <NavBar 
      class="navbar" 
      :class="{ 'shadow-lg': hasBoxShadow, 'navbar--hidden': !showNavbar }"
    />
    <div class="content flex flex-col items-center px-40">
      <Intro />
      <About />
      <Projects />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Intro from "./components/Intro.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue"

export default {
  components: { NavBar, Intro, About, Projects },

  data() {
    return {
      showNavbar: true,
      hasBoxShadow: false,
      lastScrollPosition: 0
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 1) {
        return
      }

      this.hasBoxShadow = currentScrollPosition >= 40
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
};
</script>

<style>
.navbar {
  z-index: 11;
  position: fixed;
  background: transparent;
  transform: translate3d(0, 0, 0);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}

.shadow-lg {
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  backdrop-filter: blur(10px);
}

@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter.ttf");
}

* {
  font-family: "Inter";
}

a {
  transition: 0.2s;
}


h1 a:hover {
  color: #ff8e72;
}

p a:hover {
  color: #ffaf87;
}

p, ul a {
  letter-spacing: 0.025em;
  font-weight: 400;
  font-size: 1.1rem;
}

h1,
h2,
h3 {
  font-weight: 600;
  /* letter-spacing: -0.02em; */
}

h1 {
  color: #ff8e72;
}

h2,
h3,
p {
  color: #ffaf87;
}


.special-word {
  color: #ed6a5e;
}

.fade-in {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>
