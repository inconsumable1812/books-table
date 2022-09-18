<template>
  <button v-if="props.type === 'button'" class="button">
    <p class="button__text"><slot></slot></p>
  </button>

  <div v-else class="button">
    <p class="button__text"><slot></slot></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'button' | 'link';
}>();
</script>

<style scoped lang="scss">
.button {
  background: #8bd74b;
  border-radius: 24px;
  cursor: pointer;
  border: none;

  &__text {
    font-family: 'Inter', sans-serif;
    padding: 12px 52px;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #fff;
  }
}
</style>
