<script setup lang="ts">
import { ref } from 'vue'

let screenWrapperIndex = ref(0)
</script>

<template>
  <div class="screens-wrapper" :style="'--screen-index:' + screenWrapperIndex">
    <slot
      :prevScreen="
        () => {
          screenWrapperIndex--
          $emit('prevScreen')
        }
      "
      :nextScreen="
        () => {
          screenWrapperIndex++
          $emit('nextScreen')
        }
      "
      :screen-index="screenWrapperIndex"
    ></slot>
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
