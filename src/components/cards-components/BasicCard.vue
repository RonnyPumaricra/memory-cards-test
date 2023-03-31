<script setup lang="ts"></script>

<template>
  <div class="face-down-card game-card">
    <div class="decorative">
      <div class="border"></div>
      <slot name="decoration"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.game-card {
  background: #242b2f;
  position: relative;
  aspect-ratio: 3 / 4;

  /* Min distance from any square to the card's edge */
  --squares-inset: 28px;
  --squares-gap: 6px;
  --squares-size: 30px;
  --squares-color: #005ebd;
}
.border {
  position: absolute;
  inset: 12px;
  border: 6px solid var(--squares-color);
}

.decorative,
.content {
  position: absolute;
  inset: 0;
}
</style>
