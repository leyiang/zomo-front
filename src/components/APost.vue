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
</style>

<template>
    <div class="post-item radius">
        <div class="preview">
            <div class="preview-content radius">
            </div>
        </div>

        <div class="detail">
            <h4 class="post-title">{{ post.title.rendered }}</h4>

            <div class="info-list flex">
                <a-info icon="comment">20</a-info>
                <a-info icon="good">20</a-info>
                <a-info icon="browse">20</a-info>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => ({})
        }
    },

    created() {

        console.log( this.post );
    }
}
</script>