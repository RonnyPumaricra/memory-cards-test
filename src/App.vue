<script setup lang="ts">
import CoolButton from './components/CoolButton.vue'
import BasicScreen from './components/BasicScreen.vue'
import ScreenSlider from './components/ScreenSlider.vue'
import GameScreen from './components/GameScreen.vue'
</script>
<template>
  <ScreenSlider v-slot="{ nextScreen, prevScreen }">
    <BasicScreen>
      <CoolButton @click="nextScreen"> Empezar! </CoolButton>
    </BasicScreen>
    <GameScreen :nextScreen="nextScreen" :prevScreen="prevScreen"></GameScreen>
    <BasicScreen>
      <CoolButton
        @click="
          () => {
            prevScreen()
            prevScreen()
          }
        "
      >
        Volver al inicio!
      </CoolButton>
    </BasicScreen>
  </ScreenSlider>
</template>

<style scoped>
h1 {
  font-family: var(--title-font);
  font-weight: 900;
}
/* .basic-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
</style>
