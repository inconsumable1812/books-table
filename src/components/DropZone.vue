<template>
  <el-card shadow="never" class="drop-zone"></el-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.drop-zone {
  $width: 285px;
  $height: 280px;

  width: $width;
  height: $height;
  border-radius: 12px;
  border: 1px dashed #b0b2c1;
  background: #f2f2f2;

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
</style>
