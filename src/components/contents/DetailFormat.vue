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
    <slot name="image"></slot>
    <div style="padding-top:20px">
      <slot name="desc"></slot>
    </div>
    <div style="clear:left;">
      <slot name="content"></slot>
    </div>
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
.detail {
  a {
    color: lightgreen;
  }
  img {
    width: 120px;

    border-radius: 16px;
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
  }
}
h4 {
  margin-top: 4px;
  margin-bottom: 32px;
}
</style>