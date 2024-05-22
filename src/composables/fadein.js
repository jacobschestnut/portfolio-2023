import { ref, onMounted, onUnmounted } from 'vue';

export default function useFadeIn() {
  const fadeInElements = ref([]);

  const handleScroll = () => {
    const delay = 200;

    for (let i = 0; i < fadeInElements.value.length; i++) {
      const elem = fadeInElements.value[i];
      if (isElemVisible(elem) && !elem.hasAttribute('data-faded-in')) {
        setTimeout(() => {
          elem.style.opacity = '1';
          elem.style.transform = 'translateY(0)';
          elem.setAttribute('data-faded-in', 'true');
        }, delay * i);
      }
    }
  };

  const isElemVisible = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top + rect.height - 500;
    const elemBottom = rect.bottom;
    return elemTop < window.innerHeight && elemBottom >= 0;
  };

  onMounted(() => {
    fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'));
    document.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll);
  });

  return {
    fadeInElements,
  };
}
