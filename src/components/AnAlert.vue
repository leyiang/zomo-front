<style>
.alert .icon-success {
  font-size: 6rem;
  color: #1bc5bd;
}

.alert p {
  margin: 0;
}
</style>

<template>
  <a-modal
      :show="show"
      :class="['alert', 'alert-' + (success ? 'success' : 'fails') ]"
      @close="close"
  >
    <div class="flex flex-col gap-2 align-center w-full justify-center">
      <i class="iconfont icon-success"></i>
      <p>{{ message }}</p>
      <button class="btn" @click="close">确认</button>
    </div>
  </a-modal>
</template>

<script>
export default {
  props: {
    success: {
      type: Boolean,
      default: true
    },

    message: {
      type: String,
      default: ""
    },

    onclose: {
      type: Function,
      default: null
    },
  },

  data() {
    return {
      show: true,
    }
  },

  methods: {
    close() {
      this.show = false;
      if( this.onclose ) this.onclose();

      this.$el.remove();
      this.$destroy();
    }
  }
}
</script>