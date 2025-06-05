<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import type { FitMode } from '../use-autofit';
const fitMode = inject<Ref<FitMode>>('fitMode');

const backgroundColor = ref(getRandomColor());

// 生成随机颜色
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const handleClick = () => {
  fitMode!.value = fitMode!.value === 'widthFix' ? 'fill' : 'widthFix';
  backgroundColor.value = getRandomColor();
};
</script>

<template>
  <div class="home" :style="{ backgroundColor }">
    <button class="btn" @click="handleClick">
      {{ fitMode }}
    </button>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 32px;
}
</style>
