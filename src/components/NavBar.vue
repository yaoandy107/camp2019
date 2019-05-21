<template>
  <div id="nav" :class="{
      scrolled: scrolled
    }">
    <div class="bg"></div>
    <div class="container">
      <div class="list">
        <div class="block block-home">
          <router-link to="/#home">CAMP 2019</router-link>
          <div class="underline"></div>
        </div>
        <div class="block block-about">
          <router-link to="/#about">關於</router-link>
          <div class="underline"></div>
        </div>
        <div class="block block-course">
          <router-link to="/#course">課程</router-link>
          <div class="underline"></div>
        </div>
        <div class="block block-signup">
          <router-link to="/#signup">報名</router-link>
          <div class="underline"></div>
        </div>
        <div class="block block-code-of-conduct">
          <router-link to="/#code-of-conduct">行為準則</router-link>
          <div class="underline"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolled: false,
      targets: [],
      current: ""
    };
  },
  methods: {
    onScroll(e) {
      this.scrolled = window.pageYOffset > 20;

      var target = null;
      this.targets.forEach(e => {
        var y = e.getBoundingClientRect().y;
        y -= innerHeight / 2;
        if (y > 0) return;
        if (target == null || y > target.y)
          target = {
            e,
            y
          };
      });

      if (target) {
        // console.log(target.e);
        //window.location.hash = "#" + target.e.id;
        document
          .querySelectorAll(".underline-show")
          .forEach(x => x.classList.remove("underline-show"));
        document
          .querySelector(".block-" + target.e.id + " .underline")
          .classList.add("underline-show");
        if (e == null || (e.type != "mousewheel" && e.type != "touchmove")) {
        } else this.$router.push("");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("mousewheel", this.onScroll);
    window.addEventListener("touchmove", this.onScroll);
  },
  mounted() {
    this.targets = document.querySelectorAll(".anchor");
    this.onScroll();
    console.log(this.targets);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("mousewheel", this.onScroll);
    window.removeEventListener("touchmove", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
@import "../style/main.scss";

a {
  color: white;
  transition: all 0.5s;
}

#nav {
  // color: black;
  position: relative;

  padding: 0px 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  a {
    display: block;
    padding: 12px 0px;
    position: relative;

    // font-weight: bold;
    text-decoration: none;
    // background: $color-secondary-bg;
  }

  // background-color: white;

  @include rwd-above(768px) {
    padding-top: 16px;
  }
}

.bg {
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  top: 0;
  z-index: -1;
  transition: opacity 0.5s;
}

.list {
  display: flex;
}

.block {
  position: relative;
  margin: 0px 6px;
  height: 100%;

  @include rwd-above(768px) {
    margin: 0px 12px;
  }
}

.underline {
  position: absolute;
  width: 0%;
  bottom: 0;
  height: 2px;
  background-color: white;
  transition: all 0.2s;

  &.underline-show {
    width: 100%;
  }
}

.scrolled {
  .bg {
    height: 100%;
    opacity: 1;
    width: 100%;
  }
}
</style>