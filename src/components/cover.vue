<template>
  <div class="cover">
    <div class="overlay">
      <slot></slot>
    </div>
    <div class="visual-container">
      <div v-scroll-reveal class="planet planet2">
        <img class="planet2-body" alt="green planet" src="../assets/planet_green.svg">
        <div class="rotate">
          <img class="curvetext" alt="SITCON CAMP 2019" src="../assets/curved text.png">
        </div>
      </div>
      <div v-scroll-reveal class="planet planet1">
        <img class="planet1-body" alt="red planet" src="../assets/planet_pink.svg">
        <img class="cage" alt src="../assets/cage.svg">
      </div>
    </div>
    <div class="title-container-wrapper">
      <div class="container">
        <div class="title-container">
          <div v-scroll-reveal class="subtitle">
            <img src="../assets/camp2019.svg" alt="SITCON CAMP 2019 夏令營">
          </div>
          <div v-scroll-reveal class="title">
            <h1>開源</h1>
            <h1>宇宙</h1>
            <div class="leftborder">
              <h3>OPEN-</h3>
              <h3>SOURCE</h3>
              <h3>UNIVERSE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img alt="SITCON logo" src="../assets/logo.svg"> -->
    <!-- <div class="background"></div> -->
  </div>
</template>

<script>
export default {
  name: "cover"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/main.scss";

.cover {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
}
.visual-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background {
  // background-color: black;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.5);
}
.overlay {
  position: absolute;
}
.heading {
  font-weight: normal;
}

h1,
h2,
h3 {
  margin: 0;
}

.title-container-wrapper {
  // position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.container {
}

.title-container {
  position: relative;
  z-index: 2;
  // width: 100%;
  margin-left: 20px;
  height: 100%;
  // top: 50%;
  // transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 64px;
}

.title {
  // position: absolute;
  margin-top: 60px;
  font-size: 2em;
  text-align: left;
  line-height: 1.1;
  h3 {
    font-size: 1.5em;
  }
}

.subtitle {
  // position: absolute;
  font-size: 1.5em;
  text-align: left;
  line-height: 0.9;
  width: 60%;
  margin-top: 32px;
  @include rwd-below(768px){
    width: 80%;
  }
}

.leftborder {
  margin: 4px;
  border-left: solid 4px white;
  padding-left: 16px;
}

@include rwd-below(1280px) {
  .title {
    font-size: 2em;
  }
  .subtitle {
    font-size: 1.5em;
  }
}

@include rwd-below(768px) {
  .title {
    font-size: 1.5em;
  }
  .subtitle {
    font-size: 1.5em;
  }
}

@include rwd-below(480px) {
  .title {
    font-size: 1em;
  }
  .subtitle {
    font-size: 1em;
  }
}

img {
  max-width: 768px;
}

.planet {
  position: absolute;
  transition: all 0.5s;
}

.planet1 {
  width: 400px;
  bottom: 35%;
  right: 20%;
  animation: float-up-down 12s ease infinite;
}

.planet2 {
  top: 30%;
  right: 15%;
  animation: float-up-down 10s ease infinite;
}

.planet2-body,
.planet1-body,
.curvetext,
.cage {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.planet1-body {
  width: 400px;
}
.planet2-body {
  width: 200px;
  height: 200px;
  @include rwd-below(480px) {
    width: 100px;
    height: 100px;
  }
}
.curvetext {
  width: 300px;
  @include rwd-below(480px) {
    width: 150px;
  }
}

.rotate {
  animation: rotate 20s infinite linear;
}

.cage {
  width: 800px;
}

@keyframes float-up-down {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, -30px);
  }
  100% {
    transform: translate(0, 0%);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

img {
  pointer-events: none;
}
img::selection {
  background: none;
}
</style>