<script setup lang="ts">
import type { ExtendedCardData } from '@/types'
import BasicCard from './BasicCard.vue'

interface Props {
  cardData: ExtendedCardData
}
defineProps<Props>()

const baseUrl = import.meta.env.BASE_URL + 'cards-collections/'
</script>

<template>
  <BasicCard>
    <template v-if="cardData.type == 'img'" v-slot:content>
      <div class="img-wrapper"><img :src="baseUrl + cardData.answer" alt="" /></div>
    </template>
    <template v-else v-slot:content>
      <p>{{ cardData.answer }}</p>
    </template>
  </BasicCard>
</template>

<style scoped>
p {
  position: absolute;
  font-size: 2rem;
  inset: var(--squares-inset);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 700;
}

.img-wrapper {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
</style>
