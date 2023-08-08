<template>
  <div :style="bgc">123</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const backGroundColor = defineProps(["color"]);

const bgc = {
  width: "97vw",
  height: "97vh",
  backgroundColor: backGroundColor.color,
  margin: 0,
  padding: 0,
};
console.log(bgc);
</script>

<style scoped></style>
