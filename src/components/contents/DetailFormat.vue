<template>
  <div class="detail">
    <h3>
      <slot name="title"></slot>
    </h3>
    <slot name="subtitle"></slot>
    <h4 style="text-align:right">
      講師：
      <slot name="teacher"></slot>
    </h4>
    <slot name="desc"></slot>
    <slot name="content"></slot>
    <slot name="image"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" >
.detail a {
  color: lightgreen;
}
h4 {
  margin-top: 0px;
  margin-bottom: 32px;
}
</style>