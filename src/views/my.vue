<style>
.my-aside {
  width: 400px;
  background-color: #254BD3;
}

.my-header {
  height: 40px;
  background-color: #FFF;
}

.main-content {
  flex: 1;
  overflow-y: scroll;
  padding: 1rem 60px;
}

.main-content::-webkit-scrollbar {
  width: 8px;
}

.main-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
}

.my-points {
  flex: 1;
  height: 300px;
  background: url("../assets/point-bg.svg") bottom right no-repeat;
  padding: 2rem 4rem;
  box-sizing: border-box;
}

.my-points h4 {
  font-size: 24px;
  margin: 0;
}

.my-points h2 {
  color: var(--main-color);
  font-size: 42px;
  margin: 0;
}

.how-to {
  flex: 2;
}

.card {
  background-color: #FFF;
}

.how-to {
  padding: 2rem;
  font-size: 22px;
}

.how-to strong {
  color: var(--main-color);
  margin: 0 .5rem;
}

.how-to h4,
.how-to p {
  margin: 0;
}

.how-to .btn {
  width: 200px;
}

.how-to .btn-list {
  position: relative;
}

.how-to .btn-list img {
  position: absolute;
  width: 80px;
  bottom: calc( 100% - 5px );
  right: 60px;
}

</style>

<template>
  <div class="my-page flex h-full">
    <aside class="my-aside">

    </aside>

    <main class="my-main f1 flex flex-col">
      <header class="my-header">
        12312
      </header>

      <div class="main-content flex flex-col" style="gap: 4rem;">

        <div class="flex gap-1">
          <div class="card my-points radius">
            <div class="flex flex-col gap-1">
              <h4>我的积分</h4>
              <h2>128</h2>
            </div>

          </div>

          <div class="card how-to radius flex flex-col">
            <h4 style="margin-bottom: 40px;">如何获得积分？</h4>

            <div class="flex flex-col gap-h">
              <p>邀请朋友注册琢磨可以获得<strong>10</strong>积分</p>
              <p>每日签到可以获得<strong>2</strong>积分</p>
            </div>

            <div class="flex gap-1 ml-auto mt-auto btn-list">
              <img src="../assets/sprite.svg" alt="sprite">
              <button class="btn">复制邀请链接</button>
              <button class="btn">点击签到</button>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">我收藏的</h2>
          <a-post-list class="lg">
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
          </a-post-list>
        </div>

        <div class="section">
          <h2 class="section-title">我点赞的</h2>
          <a-post-list class="lg">
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
            <a-post></a-post>
          </a-post-list>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
</script>