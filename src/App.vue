<script setup lang="ts">
import CoolButton from './components/CoolButton.vue'
import BasicScreen from './components/BasicScreen.vue'
import ScreenSlider from './components/ScreenSlider.vue'
import GameScreen from './components/GameScreen.vue'
import { store, randomizeGameData, cardSliderScreen } from './store'
</script>
<template>
  <ScreenSlider v-slot="{ nextScreen, prevScreen }">
    <BasicScreen>
      <CoolButton @click="nextScreen"> Empezar! </CoolButton>
    </BasicScreen>
    <GameScreen :nextScreen="nextScreen" :prevScreen="prevScreen" />
    <BasicScreen>
      <CoolButton
        @click="
          () => {
            prevScreen()
            prevScreen()
            store.randomizedData = randomizeGameData(3)
            cardSliderScreen = 0
          }
        "
      >
        Reiniciar!
      </CoolButton>
    </BasicScreen>
  </ScreenSlider>
</template>

<style scoped>
h1 {
  font-family: var(--title-font);
  font-weight: 900;
}
</style>
