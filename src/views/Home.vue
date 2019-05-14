<template>
  <div class="home">
    <div id="home" class="anchor"></div>
    <cover class="cover"></cover>
    <Background></Background>
    <HelloWorld msg="SITCON 2019 夏令營"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import Background from "@/components/Background.vue";
import cover from "@/components/cover.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    cover,
    Background
  }
};
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  min-height: 100vh;
}
</style>