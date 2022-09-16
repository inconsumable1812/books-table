<template>
  <div class="drag-tables">
    <draggable
      @start="startHandler"
      @end="endHandler"
      :list="bookList"
      class="drag-tables__books"
      :group="{ name: 'books', pull: true, put: false }"
      itemKey="id"
    >
      <template #item="{ element }">
        <ImageCard
          :isCorrectResult="element.isCorrectResult"
          :id="element.id"
          :isDragging="element.isDragging"
          :isFinish="props.isFinish"
          :title="element.title"
        ></ImageCard>
      </template>
    </draggable>

    <div class="drag-tables__drop-zones">
      <draggable
        class="drag-tables__drop-zone"
        :list="folkloreList"
        group="books"
        itemKey="id"
        @add="addToFolkloreHandler"
        @remove="removeFromFolkloreHandler"
      >
        <template #item="{ element }">
          <DropZone v-if="!element.title"></DropZone>
          <ImageCard
            v-else
            :isCorrectResult="element.isFolklore"
            :id="element.id"
            :isDragging="element.isDragging"
            :isFinish="props.isFinish"
            :title="element.title"
          ></ImageCard>
        </template>
      </draggable>
      <draggable
        class="drag-tables__drop-zone"
        :list="notFolkloreList"
        group="books"
        itemKey="id"
        @add="addToNotFolkloreHandler"
        @remove="removeFromNotFolkloreHandler"
      >
        <template #item="{ element }">
          <DropZone v-if="!element.title"></DropZone>
          <ImageCard
            v-else
            :isCorrectResult="!element.isFolklore"
            :id="element.id"
            :isDragging="element.isDragging"
            :isFinish="props.isFinish"
            :title="element.title"
          ></ImageCard>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import ImageCard from '@/components/ImageCard.vue';
import DropZone from '@/components/DropZone.vue';
import { reactive } from 'vue';

const props = defineProps<{
  isFinish: boolean;
}>();

const bookList = reactive(
  [
    { title: 'Русские народные сказки', id: 1, isFolklore: true },
    { title: 'Русские народные песни', id: 2, isFolklore: true },
    { title: 'Питер пэн', id: 3, isFolklore: false },
    { title: 'Пословицы и поговорки', id: 4, isFolklore: true },
    { title: 'Что такое родина?', id: 5, isFolklore: false },
    { title: 'Рассказы о детях', id: 6, isFolklore: false }
  ].map((el) => ({
    ...el,
    isDragging: false,
    isCorrectResult: false
  }))
);

const folkloreList = reactive(
  new Array(6).fill('').map((el, i) => ({
    id: i + 7,
    isFolkloreList: true
  }))
);
const notFolkloreList = reactive(
  new Array(6).fill('').map((el, i) => ({
    id: i,
    isNotFolkloreList: true
  }))
);

const removeFromFolkloreHandler = () => {
  folkloreList.push({ id: new Date().getTime(), isFolkloreList: true });
};

const removeFromNotFolkloreHandler = () => {
  notFolkloreList.push({ id: new Date().getTime(), isNotFolkloreList: true });
};

const addToFolkloreHandler = (e: any) => {
  const index = folkloreList.findIndex((el) => el.isFolkloreList);
  if (index === -1) return;
  folkloreList.splice(index, 1);
};

const addToNotFolkloreHandler = (e: any) => {
  const index = notFolkloreList.findIndex((el) => el.isNotFolkloreList);
  if (index === -1) return;
  notFolkloreList.splice(index, 1);
};

const startHandler = (e: any) => {
  const eventBook = e.item._underlying_vm_;
  eventBook.isDragging = true;
};

const endHandler = (e: any) => {
  const eventBook = e.item._underlying_vm_;
  eventBook.isDragging = false;
};
</script>

<style scoped lang="scss">
.drag-tables {
  display: flex;
  justify-content: space-between;

  &__books {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 3.4%;
    row-gap: 12px;
    align-self: flex-start;
  }

  &__drop-zones {
    display: flex;
    justify-content: center;
    width: 50%;
    column-gap: 3.4%;
  }

  &__drop-zone {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
}
</style>
