<style>
.my-aside {
    width: 400px;
    background-color: #FFF;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
}

.my-header {
    height: 40px;
    background-color: #FFF;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 0 1rem;
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
    bottom: calc(100% - 5px);
    right: 60px;
}

.my-aside .avatar {
    width: 100px;
    height: 100px;
    border: 5px solid #FFF;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.my-aside img {
    border-radius: 50%;
}

.my-aside h4 {
    margin: 0;
    font-size: 36px;
    font-family: "Franklin Gothic Medium", serif
}

.my-aside .wrap {
    position: absolute;
    top: 0;
    right: -5px;
    padding: 0;
    border-radius: 50%;
}

.edit {
    color: #FFF;
    font-weight: 700;
    background-color: #333;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.edit:hover {
    background-color: #444;
}

.post-poster {
    width: 40px;
    height: 40px;
    background-color: #444;
    border-radius: 5px;
    margin-right: 30px;
    overflow: hidden;
}

.post-poster img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.my-page .comment-info {
    margin-left: 70px;
}

.comment-message {
    margin: 0 0 .5rem;
}

.deco {
    position: absolute;
    font-weight: 700;
    font-family: "Microsoft YaHei UI", serif;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.deco:nth-of-type(1) {
    top: 40px;
    left: 30px;
}

.deco:nth-of-type(1)::before {
    content: '';
    display: inline-block;
    background-color: #222;
    height: 1em;
    width: 7px;
    margin-right: .5rem;
    margin-top: 1px;
    border-radius: 2px;
}

.deco:nth-of-type(2) {
    top: 40px;
    right: 30px;
}

.deco:nth-of-type(2) svg {
    width: 18px;
    height: 18px;
    margin-left: .5rem;
}
.deco:nth-of-type(3) {
    bottom: 40px;
    left: 30px;
    align-items: flex-start;
}

.deco:nth-of-type(4) {
    bottom: 50px;
    right: 30px;
    width: 40px;
    height: 10px;
    background-color: #222;
}

input {
    padding: .5rem;
    font-size: 1.25rem;
    border: 1px solid #000;
    border-radius: 5px;
}

.edit-form {
    margin: 1rem;
}

.edit-form h4 {
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
}

.edit-form .form-el {
    margin-bottom: 1rem;
}

.edit-form label {
    margin-bottom: .5rem;
}

.edit-form button {
    margin-top: 1rem;
}
</style>

<template>
    <div class="my-page flex h-full">
        <aside class="my-aside center">
            <div class="deco">MY PAGE</div>
            <div class="deco">
                <span>琢磨</span>
                <svg t="1639560319328" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2010" width="200" height="200">
                    <path
                        d="M1014.573167 822.652176L703.950268 512.029277l310.622899-310.622899a31.99659 31.99659 0 0 0 0-45.243179L867.836804 9.426835a31.99659 31.99659 0 0 0-45.243179-0.031996L511.970726 320.017738 201.347827 9.394839a31.932597 31.932597 0 0 0-45.243179 0.031996L9.368284 156.163199a31.99659 31.99659 0 0 0 0 45.243179L319.991184 512.029277 9.368284 822.652176a31.964594 31.964594 0 0 0 0 45.243179l146.736364 146.736363a31.99659 31.99659 0 0 0 45.243179 0L511.970726 704.008819l310.622899 310.622899a31.99659 31.99659 0 0 0 45.243179 0l146.736363-146.736363a31.964594 31.964594 0 0 0 0-45.243179z"
                        p-id="2011"></path>
                </svg>
            </div>
            <div class="deco flex flex-col">
                <span>SCOFIELD</span>
                <span>DESIGN</span>
            </div>
            <div class="deco"></div>

            <div class="flex flex-col gap-2 align-center">
                <div class="avatar">
                    <button class="wrap">
                        <span class="edit center"><i class="iconfont icon-upload"></i></span>
                    </button>
                    <img src="../assets/p_img.jpg" alt="profile_image">
                </div>

                <h4 v-if="$root.user">{{ $root.user.nickname }}</h4>
                <button
                    class="btn btn-sm cap"
                    style="padding: .5rem 1rem"
                    @click="editUser = true"
                >编辑信息</button>
            </div>
        </aside>

        <main class="my-main f1 flex flex-col">
            <header class="my-header flex align-center">

                <div class="user-info ml-auto">
                    <button
                        class="wrap"
                        style="margin-left: 1rem;"
                        @click="logout"
                    >
                        <i class="iconfont icon-sign-out"></i>
                    </button>
                </div>
            </header>

            <div class="main-content flex flex-col" style="gap: 4rem;">

                <div class="flex gap-1">
                    <div class="card my-points radius">
                        <div class="flex flex-col gap-1">
                            <h4>我的积分</h4>
                            <h2>{{ detail.points }}</h2>
                        </div>

                    </div>

                    <div class="card how-to radius flex flex-col">
                        <h4 style="margin-bottom: 40px;">如何获得积分？</h4>

                        <div class="flex flex-col gap-h">
                            <p>邀请朋友注册琢磨可以获得<strong>{{ detail.invite_points }}</strong>积分</p>
                            <p>每日签到可以获得<strong>{{ detail.checkin_points }}</strong>积分</p>
                        </div>

                        <div class="flex gap-1 ml-auto mt-auto btn-list">
                            <img src="../assets/sprite.svg" alt="sprite">
                            <button class="btn" @click="copyInvitation">复制邀请码</button>
                            <button
                                class="btn"
                                @click="checkin"
                                :disabled="detail.checked_in || checkin_loading"
                            >
                                <span>{{ detail.checked_in ? "今天已经签到了~" : "点击签到" }}</span>
                                <i class="iconfont icon-loading btn-loading" v-if="checkin_loading"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">我收藏的</h2>
                    <a-post-list>
                        <a-post
                            v-for="post in detail.liked_posts"
                            :post="post"
                        ></a-post>
                    </a-post-list>
                </div>

                <div class="section">
                    <h2 class="section-title">我点赞的</h2>
                    <a-post-list>
                        <a-post
                            v-for="post in detail.liked_posts"
                            :post="post"
                        ></a-post>
                    </a-post-list>
                </div>

                <div class="section">
                    <h2 class="section-title">我评论的</h2>

                    <template v-for="comment in detail.comments">
                        <div class="post-comment">
                            <div class="post-meta flex align-center">
                                <div class="post-poster">
                                    <img :src="comment.post.preview" alt="Post Preview">
                                </div>
                                <router-link :to="'/detail/' + comment.post.id ">
                                    <h4 class="sub">{{ comment.post.title }}</h4>
                                </router-link>

                                <a-info icon="good" class="ml-auto">{{ comment.like }}</a-info>
                            </div>

                            <div class="comment-info">
                                <p class="comment-message">{{ comment.content }}</p>
                                <time>
                                    <small class="sub">{{ comment.date }}</small>
                                </time>
                            </div>
                        </div>
                        <hr>
                    </template>
                </div>
            </div>
        </main>

        <a-modal
            :show="editUser"
            @close="editUser = false"
        >
            <form
                @submit.prevent="updateUser"
                class="flex flex-col w-full edit-form"
                v-if="$root.user"
            >
                <h4>信息修改</h4>
                <div class="form-el flex flex-col">
                    <label for="nickname">昵称</label>
                    <input type="text" id="nickname" v-model="$root.user.nickname" required>
                </div>

                <div class="form-el flex flex-col">
                    <label for="nickname">密码</label>
                    <input type="text" id="password" placeholder="留空不修改">
                </div>

                <button class="btn btn-sm mt-auto ml-auto">保存修改</button>
            </form>
        </a-modal>
    </div>
</template>

<script>
import utils from "../utils";

export default {
    data() {
        return {
            editUser: false,
            checkin_loading: false,

            detail: {
                comments: [],
                liked_posts: [],
            }
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.api.get("/my").then(({data}) => {
                this.detail = data;
            });
        },

        checkin() {
            this.checkin_loading = true;
            this.api.get('/checkin').then(r => {
                this.detail.checked_in = true;
                this.message.success("签到成功！");
            }).finally(() => {
                this.checkin_loading = false;
            });
        },

        logout() {
            this.$router.push("/");
            utils.remove("token");
            this.$root.user = null;
        },

        copyInvitation() {
            navigator.clipboard.writeText(this.detail.invitation_code);
            this.message.success("复制成功！");
        },

        updateUser() {
            if( ! this.$root.user ) return;

            this.api.post("/update/user", this.$root.user ).then( r => {
                this.editUser = false;
                this.message.success("修改成功！");
            }).catch( e => {
                this.$root.user.nickname = this.oldNickname;
            })
        }
    },

    watch: {
        editUser() {
            if( ! this.$root.user ) return;
            this.oldNickname = this.$root.user.nickname;
        }
    }
}
</script>