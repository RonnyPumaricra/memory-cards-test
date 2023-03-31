<script setup lang="ts">
import BasicCard from './BasicCard.vue'

interface Props {
  answer: string
}
defineProps<Props>()
</script>

<template>
  <BasicCard>
    <template v-slot:content>
      <p>{{ answer }}</p>
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
</style>
