<style>
.info {
  line-height: 1;
}

.info .iconfont {
  font-size: 1.125rem;
  margin-right: .25rem;
}
</style>

<template>
  <span class="info flex align-center">
    <i :class="['iconfont', 'icon-' + icon ]"></i>
    <span><slot></slot></span>
  </span>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: "good"
      }
    }
  }
</script>