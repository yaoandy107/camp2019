<template>
  <div class="main">
    <hr>
    <h4>過去學員心得</h4>
    <div class="wrapper">
      <div class="scroller" ref="scroller">
        <div class="list">
          <div class="student" v-for="(student,i) in studentexp" :key="i">
            <div class="wrapper">
              <div class="scroller-y">
                <div class="content">
                  <p v-for="(line, j) in student.content" :key="j">{{ line }}</p>
                </div>
              </div>
            </div>
            <h5>—— {{ student.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <span class="button prev" @click.stop="prev">←上一篇</span>
      <span class="button next" @click.stop="next">下一篇→</span>
    </div>
    <hr>
  </div>
</template>
<script>
import studentexp from "../assets/json/studentexp.json";
import { clearTimeout } from "timers";

export default {
  data() {
    return { studentexp, page: 0, scrollEventId: null };
  },
  methods: {
    onScroll(e) {
      if (this.scrollEventId != null) window.clearTimeout(this.scrollEventId);
      console.log(e);
      this.page = Math.round(
        (this.$refs.scroller.scrollLeft / this.$refs.scroller.scrollWidth) *
          studentexp.length
      );
      this.scrollEventId = window.setTimeout(() => {
        this.goPage();
      }, 200);
    },
    prev(e) {
      this.page--;
      this.goPage();
      e.preventDefault();
    },
    next(e) {
      this.page++;
      this.goPage();
      e.preventDefault();
    },
    goPage() {
      console.log("hi");
      while (this.page < 0) this.page += studentexp.length;
      this.page %= studentexp.length;
      this.$refs.scroller.scrollTo(
        (this.page * this.$refs.scroller.scrollWidth) / studentexp.length,
        0
      );
    }
  },
  mounted() {
    this.$refs.scroller.addEventListener("scroll", this.onScroll);
    this.$refs.scroller.addEventListener("scrollend", this.onScroll);
  },
  destroyed() {
    this.$refs.scroller.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped lang="scss">
.main {
  background: rgba(0, 0, 0, 0.4);
}
.wrapper {
  overflow: hidden;
}
.scroller {
  margin-bottom: -100px;
  padding-bottom: 100px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &-y {
    margin-right: -100px;
    padding-right: 100px;
    overflow-y: scroll;
  }
}
.list {
  display: flex;
}
.student {
  flex-shrink: 0;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  .content {
    height: 45vh;
    text-align: left;
  }
  h5 {
    text-align: right;
  }
}
.button {
  padding: 16px;
  margin: -16px;
  color: lightgray;
  cursor: pointer;
  &:hover {
    color: white;
  }
}
.navigation {
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
}
</style>
