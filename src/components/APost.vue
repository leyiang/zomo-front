<style>
.post-item {
  box-sizing: border-box;
  padding: 1rem;
  background-color: #FFF;
}

.post-item .preview {
  width: 100%;
  padding-bottom: 56.2%;
  position: relative;
}

.preview-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #E5E5E5;
}

.detail .info-list {
  gap: 1rem;
}

.post-title {
  margin: 20px 0 10px;
}

.detail .info .iconfont {
  font-size: 1.125rem;
  margin-right: .25rem;
}

</style>

<template>
  <div class="post-item radius">
    <div class="preview">
      <div class="preview-content radius">
      </div>
    </div>

    <div class="detail">
      <h4 class="post-title">文章标题</h4>

      <div class="info-list flex">
        <span class="info flex align-center">
          <i class="iconfont icon-comment"></i>
          <span>20</span>
        </span>

        <span class="info flex align-center">
          <i class="iconfont icon-good"></i>
          <span>20</span>
        </span>

        <span class="info flex align-center">
          <i class="iconfont icon-browse"></i>
          <span>20</span>
        </span>
      </div>

    </div>
  </div>
</template>

<script>

</script>