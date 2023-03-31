<script setup lang="ts">
import type { ExtendedCardData } from '@/types'
import FaceDownCard from './cards-components/FaceDownCard.vue'
import FaceUpCard from './cards-components/FaceUpCard.vue'

interface Props {
  index: number
  cardData: ExtendedCardData
  // reveal: () => void
}

defineProps<Props>()
// const props = defineProps<Props>()

// const content = () => (props.cardData.revealed ? props.cardData.answer : '?')
</script>

<template>
  <article>
    <h3>{{ cardData.clue }}</h3>
    <!-- <div class="spoiler-card game-card" v-if="cardData.revealed">{{ cardData.answer }}</div> -->
    <FaceUpCard v-if="cardData.revealed" :answer="cardData.answer" />
    <FaceDownCard v-else @reveal-card="$emit('revealCard')" />
    <!-- <button @click.once="$emit('revealCard', index)" :disabled="cardData.revealed">
      Turn card
    </button> -->
  </article>
</template>

<style scoped>
article {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}
.game-card {
  /* min-width: 270px;
  width: 100%; */
  aspect-ratio: 3 / 4;
}
.spoiler-card {
  background-color: var(--spoiler-background);
  backdrop-filter: blur(10px);
  font-size: 2rem;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
}
</style>
