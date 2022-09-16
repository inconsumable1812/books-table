<template>
  <div class="home">
    <DragTables :isFinish="isFinish"></DragTables>
    <el-button @click="handler" type="success">Success</el-button>
  </div>
</template>

<script setup lang="ts">
import DragTables from '@/components/DragTables.vue';
import { ref } from 'vue';

const isFinish = ref(false);

const handler = () => {
  isFinish.value = !isFinish.value;
};
</script>

<style scoped></style>
