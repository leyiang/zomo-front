<style>
.category-desc {
    margin: 0;
    background-color: #FFF;
    padding: 1.25rem 1.5rem;
}

.filter-btn-list {
    gap: 1rem;
    margin: 2rem 0;
}

.filter-btn {
    padding: 5px 10px;
    font-size: 14px;
    background-color: rgb(37 75 211 / 0%);
    color: var(--text-color);
    transition: none;
}

.filter-btn-active {
    color: #FFF;
    background-color: var(--main-color);
}

.category-btn {
    padding: 1rem 2rem;
    background-color: #222;
    font-size: 14px;
}
</style>

<template>
    <div class="blog-page">
        <a-header class="with-margin"></a-header>

        <div class="layout-inner">

            <a-crumb></a-crumb>

            <div
                class="flex"
                style="gap: 1rem; margin-bottom: 2rem;"
            >
                <button
                    class="btn category-btn"
                >1231231</button>
            </div>

            <p class="category-desc radius">{{ category.description }}</p>

            <div class="filter-btn-list flex">
                <button class="btn filter-btn filter-btn-active">默认</button>
                <button class="btn filter-btn">浏览最多</button>
                <button class="btn filter-btn">点赞最多</button>
                <button class="btn filter-btn">评论最多</button>
            </div>

            <a-post-list>
                <a-post
                    v-for="post in posts"
                    :post="post"
                ></a-post>
            </a-post-list>
        </div>

        <a-footer></a-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            category: {},
            posts: [],
        }
    },

    created() {
        this.id = this.$route.params.id;

        this.api.get("/categories/" + this.id ).then( ({data}) => {
            this.category = data;
        });

        this.api.get("posts?categories=" + this.id ).then( ({data}) => {
            this.posts = data;
        });
    }
}
</script>