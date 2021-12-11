<template>
  <div class="blog-page home-page">

    <a-header class="with-margin"></a-header>

    <div class="layout-inner">
      <a-slider class="with-margin"></a-slider>

      <div class="section-list flex flex-col" style="gap: 4rem;">


        <div
            class="section"
            v-for="section in sections"
        >
          <h2 class="section-title">{{ section.title }}</h2>

          <a-post-list>
            <a-post
                v-for="post in section.posts"
                :post="post"
            ></a-post>
          </a-post-list>
        </div>

      </div>

    </div>

    <a-footer></a-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sections: [],
    }
  },

  created() {
      this.api.get("/sections").then( ({data}) => {
          this.sections = data;
      });
  }
}
</script>