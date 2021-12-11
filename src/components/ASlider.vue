<style>
  .slider-wrapper {
    height: 450px;
    background-color: #dedeef;
    user-select: none;
  }

  .slider-wrapper.with-margin {
    margin-bottom: 40px;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>

<template>
  <div class="slider-wrapper radius">
    <div class="slider-inner h-full">
      <div class="slide h-full">
        <img src="@/assets/slide-template.png" alt="slide png">
      </div>
    </div>
  </div>
</template>

<script>
</script>