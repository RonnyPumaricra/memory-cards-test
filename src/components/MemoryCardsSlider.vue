<script setup lang="ts">
import ScreenSlider from './ScreenSlider.vue'
import BasicScreen from './BasicScreen.vue'
import MemoryCard from './MemoryCard.vue'
import { onMounted } from 'vue'
import { store } from '@/store'

// interface Props {
//   gameData: ExtendedCardData[]
// }
// const props = defineProps<Props>()
// defineProps<Props>()

// let extendedGameData = reactive<ExtendedCardData[]>(
//   props.gameData.map((el) => ({ ...el, wasRevealed: false }))
//   // props.gameData.map((el) => ({ ...el, wasRevealed: false }) as ExtendedCardData)
// )
onMounted(() => {
  console.log(store)
})
// function revealCard(index: number) {
//   store.gameTests[index].revealed = true
// }
</script>

<template>
  <ScreenSlider>
    <BasicScreen>
      <MemoryCard
        v-for="(cardData, index) in store.gameTests"
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
