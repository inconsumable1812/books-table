<template>
  <div class="home">
    <h1 class="home__header">В мире книг</h1>
    <el-card class="home__card" shadow="never" body-style="padding:0">
      <div class="home__card-box">
        <h2 class="home__card-header">Инструкция:</h2>
        <p class="home__card-body">
          Распредели книги, ориентируясь на названия, по соответствующим
          рубрикам таблицы: «Жанры фольклора», «Не являются жанрами фольклора».
        </p>
      </div>
    </el-card>
    <router-link class="home__link" to="/tables">
      <custom-button type="link">Продолжить</custom-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
</script>

<style scoped lang="scss">
.home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 10px 10px;
  width: fit-content;

  &__header {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #8bd74b;
    text-align: left;
    margin-bottom: 36px;
  }

  &__card {
    width: fit-content;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 20px 20px;
    border-top: 2px solid #8bd74b;
    margin-bottom: 36px;
  }

  &__card-box {
    padding: 22px 36px;
    text-align: left;
  }

  &__card-header {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #183b59;
    margin-bottom: 12px;
  }

  &__card-body {
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    color: #183b59;
  }

  &__link {
    display: flex;
    text-decoration: none;
  }
}
</style>
