<style>
.modal-container {
  position: fixed;
  z-index: 7000;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  min-width: 400px;
  min-height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 1rem;
  box-sizing: border-box;
}
</style>

<template>
  <div class="modal-container">
    <transition name="fade">
      <div
        class="backdrop"
        v-if="show"
        @click="$emit('close')"
      />
    </transition>

    <transition name="scale">
      <div class="modal radius flex" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  }
}
</script>