<template>
  <div class="detail">
    <h3>
      <slot name="title" />
    </h3>
    <slot name="subtitle" />
    <h4 style="text-align:right">
      講師：
      <slot name="teacher" />
    </h4>
    <slot name="image" />
    <div style="padding-top:20px">
      <slot name="desc" />
    </div>
    <div style="clear:left;">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
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
