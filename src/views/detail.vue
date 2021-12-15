<style>
.post-info {
    color: var(--text-sub-color);
}

.detail-title {
    margin: 1rem 0 .5rem;
}

.post-info {
    margin-top: -2rem;
    margin-bottom: 2rem;
}

.post-content-layout {
    margin-bottom: 2rem;
}

.post-content {
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

            <a-crumb :list="crumb"></a-crumb>

            <div class="post-info flex gap-2 align-center">
                <div class="author flex gap-h">
                    <span>作者</span>
                    <router-link to="/">
                        <strong>{{ post.data.author.nickname }}</strong>
                    </router-link>
                </div>

                <div class="flex gap-1">
                    <a-info icon="comment">{{ post.data.comment_count }}</a-info>
                    <a-info icon="good">{{ post.data.like }}</a-info>
                    <a-info icon="browse">{{ post.data.view }}</a-info>
                </div>

                <a-heart
                    :number="false"
                    :active="post.data.liked_by_current"
                    @like="likePost"
                ></a-heart>
            </div>

            <div class="post-content-layout gap-1 flex">
                <main class="post-content radius" v-html="post.post_content"></main>

                <aside class="post-aside radius">asdas</aside>
            </div>

            <div class="post-tags flex gap-1">
                <router-link
                    to="/"
                    v-for="tag in post.data.tags"
                >
                    <span class="a-tag">{{ tag.name }}</span>
                </router-link>
            </div>

            <div class="section">
                <h2 class="section-title">推荐阅读</h2>

                <a-post-list>
                    <a-post
                        v-for="post in posts"
                        :post="post"
                    ></a-post>
                </a-post-list>
            </div>

            <hr class="dashed">

            <form class="comment-form flex flex-col gap-1" @submit.prevent="reply">
                <div class="form-el">
                    <textarea class="flex w-full radius" name="content" required></textarea>
                </div>
                <button class="btn ml-auto">添加评论</button>
            </form>

            <hr class="dashed">

            <section class="comment-section">
                <h2 class="section-title">评论({{ post.data.comment_count }})</h2>

                <a-comment
                    v-for="comment in comments"
                    :comment="comment"
                    @reply="reply"
                ></a-comment>
            </section>
        </div>

        <a-footer></a-footer>
    </div>
</template>

<script>
import utils from "../utils";

export default {
    data() {
        return {
            id: null,
            ref: {},
            comments: [],
            post: {
                data: {
                    tags: [],
                    author: {}
                }
            },

            posts: [],
            crumb: [],
        }
    },

    created() {
        this.id = this.$route.params.id;
        this.fetchData();

        this.api.get("/posts?per_page=5").then(({data}) => {
            this.posts = data;
        });
    },

    methods: {
        fetchData() {
            this.api.get("/detail/" + this.id).then(({data}) => {
                this.post = data;
                console.log( data );

                if (data?.data?.category) {
                    const category = data.data.category;
                    this.crumb = [{title: category.name, link: "/category/" + category.id}, {title: data.post_title}];
                }

                const res = [];
                const {comments} = data.data;

                comments.forEach(comment => {
                    this.ref[comment.comment_ID] = comment;
                    comment.children = [];
                });

                comments.forEach(comment => {
                    if (comment.comment_parent !== "0" && !!this.ref[comment.comment_parent]) {
                        this.ref[comment.comment_parent].children.push(comment);
                    } else {
                        res.push(comment);
                    }
                });

                this.comments = res;
            });
        },

        reply(event, parent = null, callback) {
            this.$root.loginFirst();

            const data = new FormData(event.target);
            data.append("post", this.id);

            if (parent) data.append("parent", parent);

            this.api.post("/comments", data).then(r => {
                this.message.success("留言成功！");
                this.fetchData();
                event.target.reset();
                if (callback) callback();
            });
        },

        likePost() {
            this.$root.loginFirst();

            let back = this.post.data.liked_by_current;
            let diff = back ? -1 : 1;

            this.post.data.liked_by_current = ! back;
            this.post.data.like = parseInt(this.post.data.like) + diff;

            this.api.get("/like_post/" + this.id).catch( e => {
                this.post.data.liked_by_current = back;
                this.post.data.like = parseInt(this.post.data.like) - diff;
            });
        }
    }
}
</script>