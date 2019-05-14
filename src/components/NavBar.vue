<template>
  <div id="nav">
    <div :class="{
      bg: true,
      scrolled: scrolled
    }"></div>
    <router-link to="/">SITCON CAMP 2019</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.pageYOffset > 20;
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
@import "../style/main.scss";

#nav {
  // color: black;
  position: relative;

  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  color: white;
  a {
    position: relative;
    color: white;
    margin: 0px 12px;
    // font-weight: bold;
    text-decoration: none;
    // background: $color-secondary-bg;
  }
  // background-color: white;
}

.bg {
  position: absolute;
  background-color: black;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  height: 0;
  transition: height 0.5s;
  &.scrolled {
    height: 100%;
  }
}
</style>