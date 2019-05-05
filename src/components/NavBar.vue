<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped lang="scss">
@import "../style/main.scss";

#nav {
  color: black;

  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  a {
    color: black;
    margin: 0px 12px;
    font-weight: bold;
    text-decoration: none;
    // background: $color-secondary-bg;
  }
  background-color: white;
}
</style>