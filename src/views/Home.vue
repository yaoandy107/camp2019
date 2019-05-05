<template>
  <div class="home">
    <cover class="cover">
      <NavBar></NavBar>
    </cover>
    <HelloWorld msg="SITCON 2019 夏令營"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import cover from "@/components/cover.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    cover,
    NavBar
  }
};
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: 100vh;
}
</style>