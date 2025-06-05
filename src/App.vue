<script setup lang="ts">
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useAutoFit, type FitMode } from './use-autofit';

const fitMode = ref<FitMode>('fill');
provide('fitMode', fitMode);

useAutoFit({
  fitMode,
  verticalAlign: 'center'
});
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-color: #000;
}
</style>
