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
    <el-image alt="Книга" class="image-box__image" :src="src" fit="contain" />
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
}>();

// eslint-disable-next-line
const src = require(`../assets/book/book_${props.id || '1'}.png`);
</script>

<style scoped lang="scss">
.image-box {
  max-height: 280px;
  max-width: 285px;
  border: 2px solid transparent;
  position: relative;
  box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 12px;
  border-left-color: #46b755;

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
    height: 232px;
    width: 221px;
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
