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