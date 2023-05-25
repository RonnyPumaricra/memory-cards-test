<script setup lang="ts">
import type { ExtendedCardData } from '@/types'
import BasicCard from './BasicCard.vue'
import DecorativeSquares from './DecorativeSquares.vue'
import RevealIcon from './RevealIcon.vue'

const tetrisS = '011110'
const tetrisTopCorner = '011001'
const tetrisBottomCorner = '100110'

interface Props {
  cardData: ExtendedCardData
}
defineProps<Props>()

const baseUrl = import.meta.env.BASE_URL + 'cards-collections/'
</script>

<template>
  <BasicCard>
    <template v-slot:decoration>
      <DecorativeSquares :tetris-shape="tetrisS" position="top left" />
      <DecorativeSquares :tetris-shape="tetrisS" position="bottom right" />
      <DecorativeSquares :tetris-shape="tetrisTopCorner" position="top right" />
      <DecorativeSquares :tetris-shape="tetrisBottomCorner" position="bottom left" />
      <div class="clue-img-wrapper" v-if="cardData.type == 'img'">
        <img :src="baseUrl + cardData.clue" alt="" />
      </div>
    </template>
    <template v-slot:content>
      <button @click="$emit('revealCard')" :class="'reveal-card ' + cardData.type">
        <RevealIcon />
      </button>
    </template>
  </BasicCard>
</template>

<style scoped>
button {
  border: none;
  padding: 0;
  border-radius: 50%;

  position: absolute;
  inset: 0;
  margin: auto;
  width: 100px;
  height: 100px;

  cursor: pointer;
  background: hsl(0deg 0% 83% / 13%);
  color: hsl(0deg 0% 95% / 50%);

  transition: transform 200ms, background 200ms, color 200ms;

  /* Avoid constant ticks when hovering close to the edge */
  overflow: hidden;
}

button:hover {
  transform: rotate(-180deg);
  color: white;
  background: hsl(0deg 0% 83% / 30%);
}

svg {
  width: 100%;
  fill: currentColor;
}

button.img {
  width: 70px;
  height: 70px;
  top: auto;
  bottom: 40px;
}

.clue-img-wrapper {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
</style>
