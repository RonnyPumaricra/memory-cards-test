<script setup lang="ts">
interface Props {
  direction?: 'row' | 'col'
}

defineProps<Props>()
</script>
<template>
  <div class="basic-screen" :direction="direction ?? 'col'">
    <slot></slot>
  </div>
</template>
<style scoped>
.basic-screen {
  min-width: 100%;
  transform: translateX(calc(-100% * var(--screen-index)));
  transition: transform 200ms;

  /* Flex center */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
.basic-screen[direction='row'] {
  flex-direction: row;
}
</style>
