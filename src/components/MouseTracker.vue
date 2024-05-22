<template>
    <div class="mouse-coordinates ml-2">
      <p>{{ mouseX }}, {{ mouseY }}</p>
    </div>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue';

    const mouseX = ref(0);
    const mouseY = ref(0);

    onMounted(() => {
        const handleMouseMove = (event) => {
            mouseX.value = event.clientX;
            mouseY.value = event.clientY;
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  });
</script>
  
<style scoped>
.mouse-coordinates {
  position: fixed;
  top: 97%;
}
</style>
  