<script setup lang="ts">
import CoolButton from './components/CoolButton.vue'
import BasicScreen from './components/BasicScreen.vue'
import ScreenSlider from './components/ScreenSlider.vue'
import { staticStore } from './store'

import { reactive, ref } from 'vue'
import MemoryTestGame from './components/MemoryTestGame.vue'

let gameData = staticStore.allCardsData

let testGameKey = ref(0)
const mainSliderIndex = ref(0)

function resetSlider() {
  mainSliderIndex.value = 0
  testGameKey.value++
}
</script>
<template>
  <ScreenSlider :screen-index="mainSliderIndex">
    <BasicScreen>
      <CoolButton @click="mainSliderIndex++"> Empezar! </CoolButton>
    </BasicScreen>
    <BasicScreen>
      <MemoryTestGame :raw-data="gameData" :key="testGameKey" @finish="mainSliderIndex++" />
    </BasicScreen>
    <BasicScreen>
      <CoolButton @click="resetSlider"> Reiniciar! </CoolButton>
    </BasicScreen>
  </ScreenSlider>
</template>

<style scoped>
h1 {
  font-family: var(--title-font);
  font-weight: 900;
}
</style>
