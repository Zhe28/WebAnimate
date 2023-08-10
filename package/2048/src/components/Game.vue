<template>
  <div class="game">
    <div v-for="(item, index) in 9" @key="item">
      <NumberSquare :record="record" :index="index" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NumberSquare from "./NumberSquare.vue";

const locate = ref([
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
]);
// 分数记录
const record = ref<{ position: number[]; score: number }[]>(gameInit());

const rules = ref({
  rows: 3,
  column: 3,
});

// 分数初始化
function gameInit() {
  const game: { position: number[]; score: number }[] = [];
  locate.value.forEach((position) => {
    game!.push({ position, score: 2 });
  });
  return game;
}
</script>

<style>
.game {
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
}
</style>
