<template>
  <div>
    <canvas ref="background-canvas"></canvas>
  </div>
</template>

<script>
import GradientBG from "../js/gradient_bg.js";
import { version } from "punycode";

var randomList = [];
for (var i = 0; i < 200; i++) randomList.push(Math.random());

function random(index) {
  return randomList[
    Math.floor(
      randomList[(index * 3) % randomList.length] * index * randomList.length +
        index
    ) % randomList.length
  ];
}

export default {
  data() {
    return {
      /**@type {HTMLCanvasElement} */
      canvas: null,
      /**@type {CanvasRenderingContext2D} */
      ctx: null,
      drawGradientBG: null,
      offsetY: 0,
      offsetZ: 20,
      die: false
    };
  },
  methods: {
    resize() {
      this.canvas.width = innerWidth;
      this.canvas.height = innerHeight;
    },
    update() {
      if (!this.die) requestAnimationFrame(this.update);
      this.ctx.save();
      this.drawGradientBG();
      this.ctx.restore();

      this.ctx.filter = "none";
      this.ctx.fillStyle = "white";

      this.ctx.font = "20px arial";
      if (this.offsetZ > 0) this.offsetZ *= 0.96;
      else this.offsetZ = 0;

      this.offsetY += (window.pageYOffset - this.offsetY) * 0.6;

      var now = (Date.now() * 0.0002) % 1;

      for (var i = 0; i < 200; i++) {
        var x = random(i * 6) * this.canvas.width;
        var y = random(i * 6 + 1) * this.canvas.height;
        var z = random(i * 6 + 2) * 0.8 + 0.05;
        var deg = random(i * 6 + 2) * Math.PI * 2;
        var size = (z + 1 + random(i * 6 + 2) * 0.5) / 2.5;

        y -= z * this.offsetY;

        y %= innerHeight + 400;
        while (y < -100) y += innerHeight + 300;

        // zoom effect
        x =
          (x - this.canvas.width / 2) * (this.offsetZ * z + 1) +
          this.canvas.width / 2;
        y =
          (y - this.canvas.height / 2) * (this.offsetZ * z + 1) +
          this.canvas.height / 2;

        // draw
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(deg);
        this.ctx.scale(size, size);
        this.ctx.globalAlpha =
          (random(i * 6 + 3) + 1) *
          0.5 *
          (Math.sin((z + now) * Math.PI * 2) + 1) *
          0.5;

        this.ctx.fillText(String.fromCharCode(i + 32), 0, 0);
        this.ctx.restore();
      }
    }
  },
  mounted() {
    this.canvas = this.$refs["background-canvas"];
    this.ctx = this.canvas.getContext("2d");

    this.drawGradientBG = GradientBG(this.canvas);

    this.update();

    addEventListener("resize", this.resize);
    this.resize();
  },
  destroyed() {
    this.die = true;
    removeEventListener("resize", this.resize);
  }
};
</script>

<style scoped lang="scss">
canvas {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  left: 0;
  top: 0;
}
</style>