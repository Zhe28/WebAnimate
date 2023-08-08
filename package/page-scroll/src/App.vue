<script setup lang="ts">
import PageScroll from "./components/PageScroll.vue";
</script>

<template>
  <div id="scroll">
    <PageScroll color="red" class="cd" />
    <PageScroll color="green" class="cd" />
    <PageScroll color="lightOrange" class="cd" />
    <PageScroll color="#CCFFFF" class="cd" />
    <PageScroll color="#FFCCCC" class="cd" />
    <PageScroll color="#CCCCFF" class="cd" />
  </div>
</template>

<style scoped>
#scroll {
  overflow: scroll;
  height: 98.5vh;
  scroll-snap-type: y mandatory;
}

.cd {
  scroll-snap-align: end;
}
</style>
