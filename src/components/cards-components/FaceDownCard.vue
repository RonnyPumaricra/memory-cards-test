<script setup lang="ts">
import DecorativeSquares from './DecorativeSquares.vue'
import RevealIcon from './RevealIcon.vue'

const tetrisS = '011110'
const tetrisTopCorner = '011001'
const tetrisBottomCorner = '100110'
</script>

<template>
  <div class="face-down-card game-card">
    <div class="decorative">
      <div class="border"></div>
      <DecorativeSquares :tetris-shape="tetrisS" position="top left" />
      <DecorativeSquares :tetris-shape="tetrisS" position="bottom right" />
      <DecorativeSquares :tetris-shape="tetrisTopCorner" position="top right" />
      <DecorativeSquares :tetris-shape="tetrisBottomCorner" position="bottom left" />
    </div>
    <div class="content">
      <button @click="$emit('revealCard')" class="reveal-card"><RevealIcon /></button>
    </div>
  </div>
</template>

<style scoped>
.decorative,
.content {
  position: absolute;
  inset: 0;
}

.decorative {
  background: #242b2f;
  /* Min distance from any square to the card's edge */
  --squares-inset: 28px;
  --squares-gap: 6px;
  --squares-size: 30px;
  --squares-color: #005ebd;
}
.border {
  position: absolute;
  inset: 12px;
  border: 6px solid #005ebd;
}

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

.game-card {
  position: relative;
  aspect-ratio: 3 / 4;
}
</style>
