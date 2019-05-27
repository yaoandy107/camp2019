<template>
  <div
    id="app"
    :class="{
      ready
    }"
  >
    <NavBar />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <div class="loading top" />
    <div class="loading bottom" />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      ready: false
    }
  },
  created () {
    var me = this
    window.addEventListener('load', function (event) {
      me.ready = true
      console.log('ready')
    })
  }
}
</script>
<style lang="scss">
@import "/style/main.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.loading {
  position: fixed;
  // top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background: black;
  z-index: 99;
  transition: height 1.5s;

  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
}

.ready {
  .loading {
    height: 0;
  }
}
</style>
