<style>
.post-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
</style>

<template>
  <div class="blog-page">
    <a-header class="index-header"></a-header>

    <div class="layout-inner">
      <a-slider class="with-margin"></a-slider>

      <div class="section">
        <h2 class="section-title">UI/UX 教程</h2>

        <div class="post-list">
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
</script>