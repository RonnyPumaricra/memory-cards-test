<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  screenIndex: number
}
defineProps<Props>()

// let screenWrapperIndex = ref(0)
</script>

<template>
  <div class="screens-wrapper" :style="'--screen-index:' + screenIndex">
    <!-- <slot
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
    ></slot> -->
    <slot></slot>
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
