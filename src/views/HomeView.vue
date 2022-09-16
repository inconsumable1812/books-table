<template>
  <div class="home">
    <List></List>
    <ImageCard
      :is-correct-result="isCorrectResult"
      :id="1"
      :isDragging="isDragging"
      :isFinish="true"
    ></ImageCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import List from '@/components/List.vue';
import ImageCard from '@/components/ImageCard.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const isCorrectResult = ref(true);
    const isDragging = ref(true);
    return { isCorrectResult, isDragging };
  },
  components: {
    // HelloWorld,
    List,
    ImageCard
  }
});
</script>
