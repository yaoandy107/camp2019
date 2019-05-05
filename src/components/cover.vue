<template>
  <div class="cover">
    <div class="overlay">
      <slot></slot>
    </div>
    <img class="planet planet2" alt="red planet" src="../assets/planet_pink.svg">
    <img class="planet planet1" alt="green planet" src="../assets/planet_green.svg">
    <div class="title-container">
      <div class="subtitle">
        <h2>SITCON</h2>
        <h2>CAMP</h2>
        <h2>2019</h2>
      </div>
      <div class="title">
        <h1>開源</h1>
        <h1>宇宙</h1>
      </div>
    </div>
    <!-- <img alt="SITCON logo" src="../assets/logo.svg"> -->
    <div class="background"></div>
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
  overflow: hidden;
}

.background {
  background-color: black;
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
h2 {
  margin: 0;
}

.title-container {
  position: relative;
  z-index: 2;
  padding: 32px;
  margin: auto;
  width: 75%;
  height: 60%;
  max-width: 1024px;
  top: 50%;
  transform: translate(0, -50%);
}

.title {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 4.8em;
  text-align: right;
  line-height: 1;
  margin-left: 16px;
}

.subtitle {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.5em;
  text-align: left;
  line-height: 0.9;
}

@include rwd-below(1280px) {
  .title {
    font-size: 3em;
  }
  .subtitle {
    font-size: 1.5em;
  }
}

@include rwd-below(768px) {
  .title {
    font-size: 2em;
  }
  .subtitle {
    font-size: 1.5em;
  }
}

@include rwd-below(480px) {
  .title {
    font-size: 2em;
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
  width: 300px;
  transition: all 0.5s;
}

.planet1 {
  width: 400px;
  bottom: 10%;
  left: 10%;
  animation: float-up-down 15s ease infinite;
  @include rwd-above(1280px) {
    width: 600px;
  }
}

.planet2 {
  top: 20%;
  right: 10%;
  animation: float-up-down 10s ease infinite;
  @include rwd-above(1280px) {
    width: 400px;
  }
}

@keyframes float-up-down {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, -10%);
  }
  100% {
    transform: translate(0, 0%);
  }
}
</style>