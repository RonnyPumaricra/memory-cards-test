<script setup lang="ts">
import BasicScreen from './BasicScreen.vue'
import CoolButton from './CoolButton.vue'
import MemoryCardsSlider from './MemoryCardsSlider.vue'
import { store } from '@/store'

interface Props {
  nextScreen: () => void
  prevScreen: () => void
}

// const props = defineProps<Props>()
function areAllRevealed() {
  return store.gameTests.every((el) => el.revealed === true)
}
function revealAll() {
  return store.gameTests.forEach((el) => (el.revealed = true))
}
defineProps<Props>()
</script>

<template>
  <BasicScreen>
    <MemoryCardsSlider />
    <div class="buttons-wrapper">
      <CoolButton @click="revealAll" :disabled="areAllRevealed()"> Voltear todas </CoolButton>
      <CoolButton @click="nextScreen" :disabled="!areAllRevealed()">Siguiente</CoolButton>
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
