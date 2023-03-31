<script setup lang="ts">
import BasicScreen from './BasicScreen.vue'
import CoolButton from './CoolButton.vue'
import MemoryCardsSlider from './MemoryCardsSlider.vue'
import { store, cardSliderScreen } from '@/store'

interface Props {
  nextScreen: () => void
  prevScreen: () => void
}

const props = defineProps<Props>()
function areAllRevealed() {
  return store.randomizedData[cardSliderScreen.value].every((el) => el.revealed === true)
}
function revealAll() {
  return store.randomizedData[cardSliderScreen.value].forEach((el) => (el.revealed = true))
}
function nextButton() {
  if (isLastScreen()) props.nextScreen()
  else cardSliderScreen.value++
}
function isLastScreen() {
  return cardSliderScreen.value + 1 === store.randomizedData.length
}
let content = () => (isLastScreen() ? 'Finalizar' : 'Siguiente')
// defineProps<Props>()
</script>

<template>
  <BasicScreen>
    <MemoryCardsSlider />
    <div class="buttons-wrapper">
      <CoolButton @click="revealAll" :disabled="areAllRevealed()"> Voltear todas </CoolButton>
      <CoolButton @click="nextButton" :disabled="!areAllRevealed()">{{ content() }}</CoolButton>
    </div>
  </BasicScreen>
</template>

<style scoped>
.buttons-wrapper {
  display: flex;
  justify-content: center;
  gap: 32px;
}
</style>
