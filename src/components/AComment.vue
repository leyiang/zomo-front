<style>
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

      <span>Nickname - <span class="sub">9 hours ago</span></span>
    </div>

    <div class="comment-list flex">
      <div class="splitter"></div>

      <div class="comment-detail flex flex-col gap-h f1">
        <div class="comment-message">
          This is the message of the comment. You can reply it or like it.
        </div>

        <div class="flex">
          <button class="wrap radius">
            <a-info icon="good">20</a-info>
          </button>

          <button class="wrap radius" @click="toggleReply">
            <a-info icon="comment">Reply</a-info>
          </button>
        </div>

        <div class="reply-section flex flex-col gap-h" v-if="reply">
          <textarea class="w-full radius"></textarea>
          <div class="ml-auto flex gap-1">
            <button class="btn btn-sm btn-sub" @click="closeReply">取消</button>
            <button class="btn btn-sm">回复评论</button>
          </div>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>
