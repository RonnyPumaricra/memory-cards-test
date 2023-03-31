<script setup lang="ts">
import ScreenSlider from './ScreenSlider.vue'
import BasicScreen from './BasicScreen.vue'
import MemoryCard from './MemoryCard.vue'
import { store, cardSliderScreen } from '@/store'
</script>

<template>
  <ScreenSlider @next-screen="cardSliderScreen++">
    <BasicScreen>
      <MemoryCard
        v-for="(cardData, index) in store.randomizedData[cardSliderScreen]"
        :key="index"
        :card-data="cardData"
        :index="index"
        @reveal-card="cardData.revealed = true"
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
