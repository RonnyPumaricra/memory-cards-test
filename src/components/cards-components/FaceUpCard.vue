<script setup lang="ts">
interface Props {
  answer: string
}
defineProps<Props>()
</script>

<template>
  <div class="face-up-card game-card">
    <div class="decorative">
      <div class="border"></div>
    </div>
    <div class="content">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<style scoped>
.decorative,
.content {
  position: absolute;
  inset: 0;

  --squares-inset: 28px;
}

.decorative {
  background: #242b2f;
  /* Min distance from any square to the card's edge */
  --squares-gap: 6px;
  --squares-color: #005ebd;
}
.border {
  position: absolute;
  inset: 12px;
  border: 6px solid #005ebd;
}

.game-card {
  position: relative;
}
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
