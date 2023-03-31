<script setup lang="ts">
interface Props {
  tetrisShape: string
  position: string
}

defineProps<Props>()
</script>

<template>
  <div :class="position + ' squares-grid'">
    <div v-for="(square, i) in tetrisShape" :key="i" :square-code="square"></div>
  </div>
</template>

<style scoped>
.squares-grid {
  position: absolute;
  display: grid;
  gap: var(--squares-gap);
  grid-template-columns: repeat(3, var(--squares-size));
  grid-template-rows: repeat(2, var(--squares-size));
}

.top.squares-grid {
  top: var(--squares-inset);
}
.bottom.squares-grid {
  bottom: var(--squares-inset);
}
.left.squares-grid {
  left: var(--squares-inset);
}
.right.squares-grid {
  right: var(--squares-inset);
}
.squares-grid div[square-code='1'] {
  background: #005ebd;
}
</style>
