<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faCloud, faCloudSun, faCloudRain, faSnowflake, faBolt, faSmog } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faCloud, faCloudSun, faCloudRain, faSnowflake, faBolt, faSmog)

const weatherResponse = ref(null)
const isLoading = ref(true)
const lat = ref(null)
const lon = ref(null)

const selectLocation = (lat, lon) => {
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`)
    .then(response => response.json())
    .then(weatherData => {
      weatherResponse.value = weatherData
      isLoading.value = false
    });
}

const getConditionDescription = (i) => {
  if (i == 0) return 'sun';
  if (i >= 1 && i <= 3) return 'cloud';
  if (i == 45 || i == 48) return 'smog';
  if ((i == 51 || i == 53 || i == 55)) return 'cloud-rain';
  if (i >= 56 && i <= 57) return 'snowflake';
  if ((i >= 61 && i <= 67) || (i >= 71 && i <= 82) || (i == 85 || i == 86)) return 'cloud-showers-heavy';
  if ((i >= 95 && i <= 96) || i == 99) return 'bolt';
}

const getWeather = () => {
  isLoading.value = true
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      lat.value = latitude;
      lon.value = longitude;
      selectLocation(latitude, longitude); 
  }, error => console.error("Error getting geolocation:", error.message));
  } else {
  console.error("Geolocation is not supported by this browser.");
  }
}

onMounted(getWeather);

</script>

<template>
  <div>
    <div v-if="isLoading">
      <h3>...</h3>
    </div>
    <div v-else-if="weatherResponse" class="flex items-center justify-center">
      <font-awesome-icon :icon="['fas', getConditionDescription(weatherResponse.current_weather.weathercode)] " size="2x" class="icon"/>
      <h3 class="pl-4">{{ Math.round(weatherResponse.current_weather.temperature) }}&deg;</h3>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.75rem;
}

.icon {
  color: #ed6a5e;
}
</style>
