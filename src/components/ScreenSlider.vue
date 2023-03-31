<script setup lang="ts">
import { ref } from 'vue'

let screenWrapperIndex = ref(0)

// const changeScreen = (increment: 1 | -1) => {
//   console.log('Changing screen...')
//   screenWrapperIndex.value += increment
// }
</script>

<template>
  <div class="screens-wrapper" :style="'--screen-index:' + screenWrapperIndex">
    <slot :prevScreen="() => screenWrapperIndex--" :nextScreen="() => screenWrapperIndex++"></slot>
  </div>
</template>

<style scoped>
.screens-wrapper {
  display: flex;
  width: 100%;
  min-height: 0;
}

.screens-wrapper > * {
  min-width: 100%;
  background: red;
}
</style>
