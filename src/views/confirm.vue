<style>
    .confirm-sign {
        font-size: 180px;
        margin: 4rem 0;
    }

    .confirm-loading {
        font-size: 40px;
        animation: rotate 2s forwards infinite linear;
    }
</style>

<template>
    <div class="w-full h-full center flex-col">
        <template v-if="loading">
            <i class="iconfont icon-loading confirm-loading"></i>
            <p style="font-size: 20px">请稍等，正在确认信息</p>
        </template>

        <template v-else>
            <template v-if="success">
                <h1 style="font-weight: 400; margin: 0;">确认注册成功</h1>
                <i class="iconfont icon-smile confirm-sign"></i>
                <router-link
                    to="/login"
                    class="btn"
                >点此前去登录</router-link>
            </template>
            <template v-else>
                <h1 style="font-weight: 400; margin: 0;">链接已失效</h1>
                <i class="iconfont icon-cry confirm-sign"></i>
                <router-link
                    to="/"
                    class="btn"
                >点此回到首页</router-link>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            success: false,
        }
    },

    created() {
        const hash = this.$route.params.hash;

        this.api.get("/check?hash=" + hash ).then( r => {
            this.success = true;
        }).catch( e => {
            this.success = false;
        }).finally(() => {
            this.loading = false;
        });
    }
}
</script>