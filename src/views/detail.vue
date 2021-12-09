<style>
.post-info {
  color: var(--text-sub-color);
}

.detail-title {
  margin: 1rem 0 .5rem;
}

.post-info {
  margin-bottom: 2rem;
}

.post-content-layout {
  margin-bottom: 2rem;
}

.post-content {
  height: 800px;
  /*background-color: #FFF;*/
  flex: 3;
}

.post-aside {
  flex: 1;
}

.post-content,
.post-aside {
  background-color: #FFF;
  padding: 1.5rem;
}

.a-tag {
  border-radius: 10rem;
  background-color: #E3E3E3;
  padding: 5px 1rem;
  font-size: 12px;
  display: inline-block;
}

.post-tags {
  margin-bottom: 2rem;
}

.comment-form .btn {
  width: 300px;
}
</style>

<template>
  <div class="detail-page">
    <a-header class="with-margin"></a-header>

    <div class="layout-inner">

      <a-crumb></a-crumb>

      <h2 class="detail-title">文章标题在这里，不管有多长都放的下</h2>

      <div class="post-info flex gap-2">
        <div class="author flex gap-h">
          <span>作者</span>
          <router-link to="/">
            <strong>刘木</strong>
          </router-link>
        </div>

        <div class="flex gap-1">
          <a-info icon="comment">20</a-info>
          <a-info icon="good">20</a-info>
          <a-info icon="browse">20</a-info>
        </div>
      </div>

      <div class="post-content-layout gap-1 flex">
        <main class="post-content radius">
          123123123
        </main>

        <aside class="post-aside radius">asdas</aside>
      </div>

      <div class="post-tags flex gap-1">
        <router-link to="/">
          <span class="a-tag">UI/UX</span>
        </router-link>

        <router-link to="/">
          <span class="a-tag">UI/UX</span>
        </router-link>

        <router-link to="/">
          <span class="a-tag">UI/UX</span>
        </router-link>
      </div>

      <div class="section">
        <h2 class="section-title">推荐阅读</h2>

        <a-post-list>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
          <a-post></a-post>
        </a-post-list>
      </div>

      <hr class="dashed">

      <form action="" class="comment-form flex flex-col gap-1">
        <div class="form-el">
          <textarea class="flex w-full radius" name="content" required></textarea>
        </div>
        <button class="btn ml-auto">添加评论</button>
      </form>

      <hr class="dashed">

      <section class="comment-section">
        <h2 class="section-title">评论(323)</h2>

        <a-comment>
          <a-comment>
            <a-comment>
              <a-comment></a-comment>
            </a-comment>
          </a-comment>
        </a-comment>

        <a-comment></a-comment>
        <a-comment></a-comment>
      </section>
    </div>
  </div>
</template>

<script>
</script>