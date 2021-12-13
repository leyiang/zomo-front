<style>
.like {
    font-size: 1rem;
}

.like span:last-of-type {
    margin-left: -10px;
}

.heart-active {
    animation-timing-function: steps(28);
    animation-name: heart-burst;
    animation-duration: .8s;
    animation-iteration-count: 1;
    display: inline-block;
    animation-fill-mode: forwards;
}

@keyframes heart-burst {
    0% {
        background-position: left
    }

    100% {
        background-position: right
    }
}

.heart {
    width: 60px;
    height: 60px;
    display: inline-block;
    background-image: url("../assets/like.png");
}

.heart-wrap {
    background-color: transparent;
    border: none;
    padding: 0;
}

.a-comment-item .splitter {
    width: 2px;
    background-color: #D7D7D7;
    margin: 4px 2rem 4px 20px;
    position: relative;
    cursor: pointer;
}

.a-comment-item .splitter:hover {
    background-color: var(--main-color);
}

.a-comment-item .splitter::after {
    content: "";
    position: absolute;
    background-color: transparent;
    /*background-color: rgba(0, 0, 0, .5);*/
    top: 0;
    bottom: 0;
    width: 16px;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
}

.avatar {
    width: 40px;
    height: 40px;
    background-color: #DDD;
    border-radius: 50%;
}

.reply-section {
    max-width: 700px;
}
</style>

<template>
    <div class="a-comment-item">
        <div class="comment-info flex align-center gap-1">
            <div class="avatar">
            </div>

            <span>{{ comment.comment_author }} - <span class="sub">{{ comment.ago }}</span></span>

            <button
                class="like flex align-center ml-auto heart-wrap"
                @click="likeComment"
            >
                <span :class="['heart', comment.liked_by_current ? 'heart-active' : '' ]"></span>
                <span>{{ comment.like }}</span>
            </button>
        </div>

        <div class="comment-list flex">
            <div class="splitter"></div>

            <div class="comment-detail flex flex-col gap-h f1">
                <div class="comment-message">{{ comment.comment_content }}</div>

                <div class="flex">
                    <button class="wrap radius" @click="toggleReply" style="margin-left: -15px">
                        <a-info icon="comment">回复</a-info>
                    </button>
                </div>

                <form
                    class="reply-section flex flex-col gap-h"
                    v-if="reply"
                    @submit.prevent="$emit('reply', $event, comment.comment_ID, closeReply )"
                >
                    <textarea class="w-full radius" name="content" required></textarea>
                    <div class="ml-auto flex gap-1">
                        <button class="btn btn-sm btn-sub" @click="closeReply" type="button">取消</button>
                        <button class="btn btn-sm">回复评论</button>
                    </div>
                </form>

                <a-comment
                    v-for="child in comment.children"
                    :comment="child"
                    :parent="comment.id"
                    @reply="(e, id, fn) => $emit('reply', e, id, fn)"
                ></a-comment>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            default: () => ({
                children: []
            })
        },

        parent: {
            type: Number,
            default: 0,
        }
    },

    created() {
        console.log( this.comment );
    },

    data() {
        return {
            reply: false,
        }
    },

    methods: {
        toggleReply() {
            this.reply ^= 1;
        },

        closeReply() {
            this.reply = false;
        },

        likeComment() {
            let back = 1;
            if( this.comment.liked_by_current ) {
                this.comment.liked_by_current = false;
                this.comment.like --;
            } else {
                this.comment.liked_by_current = true;
                this.comment.like ++;
                back = -1;
            }

            this.api.get("/like_comment/" + this.comment.comment_ID).catch( e => {
                this.comment.liked_by_current = back !== -1
                this.comment.like += back;
            });
        }
    }
}
</script>
