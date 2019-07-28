<template>
  <div
    :class="{
      main: true,
      display
    }"
  >
    <div class="content">
      <div class="container">
        <slot />
      </div>
    </div>
    <div
      class="close"
      @click="display=false"
    />
  </div>
</template>
<script>
export default {
  data () {
    return { display: false }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  display: none;
  &.display {
    display: block;
    opacity: 1;
  }
}
.content {
  padding: 100px 16px;
  text-align: left;
}
.close {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 50px;
  top: 50px;
  cursor: pointer;
  &:before,
  &:after {
    position: relative;
    top: 50%;
    display: block;
    content: "";
    width: 40px;
    height: 2px;
    background: white;
    transform: rotate(45deg) translate(1px, 0);
  }
  &:after {
    transform: rotate(-45deg) translate(1px, 0);
  }
}
</style>
