<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import type { FitMode } from '../use-autofit';
const fitMode = inject<Ref<FitMode>>('fitMode')!;

const backgroundColor = ref(getRandomColor());

// 生成随机颜色
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const handleChange = () => {
  backgroundColor.value = getRandomColor();
};
</script>

<template>
  <div class="home" :style="{ backgroundColor }">
    <div class="select">
      <label>
        <input
          v-model="fitMode"
          type="radio"
          name="fitMode"
          value="fill"
          @change="handleChange"
        />
        fill
      </label>
      <label>
        <input
          v-model="fitMode"
          type="radio"
          name="fitMode"
          value="widthFix"
          @change="handleChange"
        />
        widthFix
      </label>
      <label>
        <input
          v-model="fitMode"
          type="radio"
          name="fitMode"
          value="none"
          @change="handleChange"
        />
        none
      </label>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.select {
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
}

.select label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.select label input {
  margin-right: 12px;
  transform: scale(1.5);
}
</style>
