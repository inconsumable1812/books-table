<template>
  <div class="root">
    <div class="books">
      <header class="books__header">
        <router-link class="books__header-link" to="/">
          <el-icon class="books__header-icon">
            <ArrowIcon></ArrowIcon>
          </el-icon>
          <span>Назад</span>
        </router-link>
      </header>
      <div class="books__big-button-box">
        <el-button class="books__big-button" type="success"
          >В мире книг</el-button
        >
      </div>
      <DragTables class="books__drag" :isFinish="isFinish"></DragTables>
      <div class="books__check-button-box">
        <el-button class="books__check-button" @click="handler" type="success"
          >Проверить</el-button
        >
      </div>
    </div>

    <div class="root__box-image">
      <el-image alt="кошка" class="root__image" :src="src" fit="contain" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DragTables from '@/components/DragTables.vue';
import { ref } from 'vue';
import ArrowIcon from '../components/ArrowIcon.vue';

const isFinish = ref(false);

const handler = () => {
  isFinish.value = !isFinish.value;
};

const src = require('../assets/cat.png');
</script>

<style scoped lang="scss">
.root {
  background: #ecf6e9;

  &__box-image {
    display: flex;
    justify-content: end;
  }
}

.books {
  max-width: 1400px;
  margin: 0 auto;
  background: #fff;

  &__header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 8px;
  }

  &__header-icon {
    width: 36px;
    height: 36px;
  }

  &__header-link {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: #8bd74b;
    font-size: 18px;
    line-height: 140%;
    column-gap: 8px;
    margin-left: 57px;
  }

  &__drag {
    padding: 0 10px;
  }

  &__big-button-box {
    margin: 0 40px;

    @media (max-width: 768px) {
      margin: 0 12px;
    }
  }

  &__big-button {
    width: 100%;
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inter', sans-serif;
    padding: 40px 0;
    background: linear-gradient(90deg, #3f8cff 0.06%, #60b9a6 99.94%);
    border-radius: 24px;
    box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
  }

  &__check-button-box {
    display: flex;
    justify-content: start;
    padding: 30px 57px;

    @media (max-width: 768px) {
      padding: 30px 35px;
    }
  }

  &__check-button {
    background: #8bd74b;
    font-family: 'Inter', sans-serif;
    border-radius: 24px;
    width: 100%;
    max-width: 191px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 18px 0;
  }
}
</style>
