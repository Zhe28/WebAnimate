<template>
  <div id="container">
    <div
      :class="`box box${index + 1}`"
      v-for="(color, index) in box"
      :key="color"
      :style="{
        backgroundColor: color,
        animationDelay: `${boxDelay + index * (boxDuration / box.length)}s`,
        animationDuration: `${boxDuration}s`,
      }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const box = ref(["#CCFFFF", "#FFCCCC", "#CCCCFF", "#CCFF99"]);
const boxDelay = ref(0);
const boxDuration = ref(2);
</script>
<style scoped>
#container {
  width: 300px;
  height: 300px;
  position: relative;
}

.box {
  width: 150px;
  height: 150px;
  /* display: inline-block; */
  /* margin: 25px; */
  /* transition: all .5s; */
  position: absolute;
  animation-name: rotateRound;
  /* animation-duration: 2s; */
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation-play-state: paused; */
  transform-origin: bottom right;
  border-radius: 50% 50% 0% 50%;
}

@keyframes rotateRound {
  from {
    /* transform: none; */
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
