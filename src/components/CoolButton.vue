<script setup lang="ts">
// import { defineComponent } from 'vue'

interface Props {
  disabled?: boolean
}
defineProps<Props>()
</script>

<template>
  <button :disabled="disabled">
    <!-- <div></div> -->
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  /* Font */
  font-size: calc(20rem / 16);
  font-weight: 700;
  color: var(--primary);
  background: var(--primary);

  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  cursor: pointer;
}
button:disabled {
  cursor: revert;
  background: var(--disabled-primary);
}
button:disabled span {
  background: var(--disabled-primary);
  border-color: var(--disabled-primary);
  color: var(--background);
  --y-translate: 0;
}
span {
  --y-translate: -2px;
  display: block;
  padding: 8px 12px;
  border: 3px solid var(--primary);
  background: var(--background);
  border-radius: inherit;
  transform: translateY(var(--y-translate));

  transition: transform 150ms;
}
button:not(:disabled):hover span {
  --y-translate: -6px;
}
button:not(:disabled):active span {
  transition-duration: 50ms;
  --y-translate: 0px;
}
/* div {
  position: absolute;
  inset: 0;
} */
</style>
