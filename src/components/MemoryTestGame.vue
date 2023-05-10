<script setup lang="ts">
import type { ExtendedCardData } from '@/types'
import CoolButton from './CoolButton.vue'
import MemoryCardsSlider from './MemoryCardsSlider.vue'

import { randomizeGameData } from '@/randomizing'
import { reactive, ref } from 'vue'

interface Props {
  rawData: ExtendedCardData[]
}
const props = defineProps<Props>()
let randomizedCardData = reactive(randomizeGameData(props.rawData, 3))
let memoryScreenIndex = ref(0)

function revealCard(eventArgs: { deckIndex: number; cardIndex: number }) {
  const { deckIndex, cardIndex } = eventArgs
  randomizedCardData[deckIndex][cardIndex].revealed = true
}

function areAllRevealed() {
  return randomizedCardData[memoryScreenIndex.value].every((cardData) => cardData.revealed)
}

function revealAll() {
  return randomizedCardData[memoryScreenIndex.value].forEach(
    (cardData) => (cardData.revealed = true)
  )
}

function isLastSreen() {
  return randomizedCardData.length === memoryScreenIndex.value + 1
}
</script>

<template>
  <div class="game-wrapper">
    <MemoryCardsSlider
      :all-cards="randomizedCardData"
      :screen-index="memoryScreenIndex"
      @reveal-card="revealCard"
    />
    <div class="buttons-wrapper">
      <CoolButton :disabled="areAllRevealed()" @click="revealAll">Reveal all</CoolButton>
      <CoolButton v-if="!isLastSreen()" :disabled="!areAllRevealed()" @click="memoryScreenIndex++">
        Next
      </CoolButton>
      <CoolButton v-else :disabled="!areAllRevealed()" @click="$emit('finish')">Finish</CoolButton>
    </div>
  </div>
</template>

<style scoped>
.game-wrapper {
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}

.buttons-wrapper {
  display: flex;
  justify-content: center;
  gap: inherit;
}
</style>
