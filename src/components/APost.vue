<style>
.post-item {
    box-sizing: border-box;
    padding: 1rem;
    background-color: #FFF;
    border: 1px solid transparent;
    transition: all .3s;
}

.post-item:hover {
    border-color: #dbdbdb;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
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

.preview-content img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
}

.detail .info-list {
    gap: 1rem;
}

.post-title {
    margin: 20px 0 10px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
}

.post-link {
    min-width: 0;
}
</style>

<template>
    <router-link :to="'/detail/' + post.id" class="post-link">
        <div class="post-item radius">
            <div class="preview">
                <div class="preview-content radius">
                    <img
                        v-if="post.meta.preview"
                        :src="post.meta.preview"
                        alt="PREVIEW"
                        loading="lazy"
                    >
                </div>
            </div>

            <div class="detail">
                <h4 class="post-title">{{ post.title.rendered }}</h4>

                <div class="info-list flex">
                    <a-info icon="comment">{{ post.meta.comment_count }}</a-info>
                    <a-info icon="good">{{ post.meta.like }}</a-info>
                    <a-info icon="browse">{{ post.meta.view }}</a-info>
                </div>

            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => ({})
        }
    },
}
</script>