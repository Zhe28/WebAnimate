<template>
  <span class="square">{{ currentScore }}</span>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const game = defineProps<{
  record: { position: number[]; score: number }[];
  index: number;
}>();
const currentScore = ref<number>(game.record[game.index].score);
const currentLocation = game.record[game.index];

window.addEventListener("keydown", (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowLeft":
      // 检测是否是最左边的方块
      // 如果是最左边的方块，则检测分数是否相同，若相同的话，将分数传递给左边的方块，分数初始为零
      // 横坐标减一，纵坐标不变
      if (currentLocation.position[0]) {
        let destLocationIndex = 0;
        const destLocation = currentLocation.position.map((position) => {
          if (destLocationIndex++ === 0) return position - 1;
          else return position;
        });

        // console.log(`destLocate is ${destLocation}`);

        //
        game.record.forEach((square) => {
          if (square.position[0] === destLocation[0] && square.position[1] === destLocation[1]) {
            if (currentLocation.score === square.score) {
              square.score *= 2;
              currentLocation.score = 0;
            }
            console.log(
              `currentLocation's score is ${currentLocation.score} \n the destSquare's score is ${square.score}`
            );
          }
        });
      }
      // console.log(game.record);
      break;
    case "ArrowRight":
      break;
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
  }
  randomGenerate();
});

function randomGenerate() {}
</script>

<style>
.square {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: red;
  text-align: center;
  line-height: 50px;
}
</style>
