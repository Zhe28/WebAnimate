<template>
  <canvas ref="canvasTag" width="300" height="150">
    warn : your browser do not support canvas.
  </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const canvasTag = ref<HTMLCanvasElement>();
const debug = true;

onMounted(() => {
  const ctx = canvasTag.value?.getContext("2d") as CanvasRenderingContext2D;

  debug && console.log(`ctx value is : \n`, ctx);

  ctx.arc(150, 75, 40, 0, Math.PI * 2);
  ctx.stroke();

  canvasTag.value?.addEventListener("wheel", (event) => {
    // debug && console.log(`event.deltaMode value is :\n`, event.wheelDelta);
  });
});

function wheelUp(event: WheelEvent) {}
function wheelDown(event: WheelEvent) {}
</script>

<style scoped>
canvas {
  border: solid 1px orange;
}
</style>
