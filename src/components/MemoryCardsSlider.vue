<script setup lang="ts">
import ScreenSlider from './ScreenSlider.vue'
import BasicScreen from './BasicScreen.vue'
import MemoryCard from './MemoryCard.vue'
// import { store, cardSliderScreen } from '@/store'
import type { ExtendedCardData } from '@/types'

interface Props {
  screenIndex: number
  allCards: ExtendedCardData[][]
}
defineProps<Props>()
</script>

<template>
  <ScreenSlider :screen-index="screenIndex">
    <BasicScreen v-for="(cardDeck, deckIndex) in allCards" :key="deckIndex">
      <MemoryCard
        v-for="(cardData, cardIndex) in cardDeck"
        :key="cardIndex"
        :card-data="cardData"
        :index="cardIndex"
        @reveal-card="$emit('revealCard', { deckIndex, cardIndex })"
      />
    </BasicScreen>
  </ScreenSlider>
</template>

<style scoped>
.basic-screen {
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  gap: 64px;
}
</style>
