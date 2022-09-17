<template>
  <el-card
    class="image-box"
    :class="{
      'image-box_dragging': props.isDragging,
      'image-box_success': props.isFinish && props.isCorrectResult,
      'image-box_error': props.isFinish && !props.isCorrectResult
    }"
    shadow="never"
  >
    <el-icon class="image-box__drag-icon">
      <DragIcon />
    </el-icon>
    <el-image
      :alt="props.title"
      class="image-box__image"
      :src="src"
      fit="contain"
    />
    <el-icon class="image-box__result-icon" v-if="props.isFinish">
      <SuccessIcon v-if="props.isCorrectResult" />
      <ErrorIcon v-else />
    </el-icon>
  </el-card>
</template>

<script setup lang="ts">
import DragIcon from '@/components/DragIcon.vue';
import SuccessIcon from '@/components/SuccessIcon.vue';
import ErrorIcon from '@/components/ErrorIcon.vue';

const props = defineProps<{
  id: number;
  isDragging: boolean;
  isFinish: boolean;
  isCorrectResult: boolean;
  title: string;
}>();

// eslint-disable-next-line
const src = require(`../assets/book/book_${props.id || '1'}.png`);
</script>

<style scoped lang="scss">
.image-box {
  $maxWidth: 285px;
  $maxHeight: 280px;

  width: 100%;
  height: 100%;
  max-height: $maxHeight;
  max-width: $maxWidth;
  border: 2px solid transparent;
  position: relative;
  box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 12px;
  cursor: grab;

  @media (max-width: 1200px) {
    max-height: calc($maxHeight / 1.3);
    max-width: calc($maxWidth / 1.3);
  }

  @media (max-width: 768px) {
    max-height: calc($maxHeight / 1.8);
    max-width: calc($maxWidth / 1.8);
  }

  @media (max-width: 520px) {
    max-height: calc($maxHeight / 2.2);
    max-width: calc($maxWidth / 2.2);
  }

  @media (max-width: 425px) {
    max-height: calc($maxHeight / 2.6);
    max-width: calc($maxWidth / 2.6);
    padding: 5px;
  }

  @media (max-width: 375px) {
    max-height: calc($maxHeight / 3.1);
    max-width: calc($maxWidth / 3.1);
  }

  :hover {
    .image-box__drag-icon {
      color: #183b59;
    }
  }

  &__drag-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    color: #b0b2c1;
    width: 20px;
    height: 20px;
  }

  &__image {
    $width: 221px;
    $height: 232px;

    height: $height;
    width: $width;

    @media (max-width: 1200px) {
      height: calc($height / 1.3);
      width: calc($width / 1.3);
    }

    @media (max-width: 768px) {
      height: calc($height / 1.8);
      width: calc($width / 1.8);
    }

    @media (max-width: 520px) {
      height: calc($height / 2.2);
      width: calc($width / 2.2);
    }

    @media (max-width: 425px) {
      height: calc($height / 2.6);
      width: calc($width / 2.6);
    }

    @media (max-width: 375px) {
      height: calc($height / 3.1);
      width: calc($width / 3.1);
    }
  }

  &__result-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    right: 4px;
  }

  &_dragging {
    border-left-color: #0c6ed6;

    .image-box__drag-icon {
      color: #183b59;
    }
  }

  &_success {
    border-left-color: #46b755;
  }

  &_error {
    border-left-color: #f93232;
  }
}
</style>
