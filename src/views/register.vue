<style>
.poster {
    flex: 7;
    background: url("../assets/login-poster.jpeg") no-repeat;
    background-size: cover;
    position: relative;
}

.login-form-container {
    flex: 3;
    background-color: #FFF;
    font-size: 18px;
}

.slogan {
    position: absolute;
    top: 80px;
    right: 80px;
    color: #FFF;
    gap: .5rem;
}

.slogan h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 100;
}

.logo-zomo {
    width: 120px;
    margin-bottom: 60px;
}

.form-el {
    margin-bottom: 25px;
}

.form-el:last-of-type {
    margin-bottom: 60px;
}

.form-el label {
    margin-bottom: .5rem;
}

.form-el input {
    width: 320px;
    height: 48px;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    font-size: 18px;
    padding: .5rem .75rem;
}
</style>

<template>
    <div class="login-page flex h-full">
        <div class="poster">
            <div class="slogan flex flex-col align-center">
                <h2>心存理想</h2>
                <h2>星夜兼程</h2>
            </div>
        </div>

        <div class="login-form-container center">
            <form class="flex flex-col align-center" @submit.prevent="register">
                <router-link to="/">
                    <img src="@/assets/logo-zomo.png" alt="logo-zomo" class="logo-zomo">
                </router-link>

                <div class="form-el flex flex-col">
                    <label for="username">用户名</label>
                    <input type="text" id="username" name="username" required class="radius" autocomplete="off">
                </div>

                <div class="form-el flex flex-col">
                    <label for="email">邮箱</label>
                    <input type="email" id="email" name="email" required class="radius" autocomplete="off">
                </div>

                <div class="form-el flex flex-col">
                    <label for="password">密码</label>
                    <input type="password" id="password" name="password" required class="radius" autocomplete="off">
                </div>

                <div class="form-el flex flex-col">
                    <label for="invitation_code">邀请码 <span class="sub">(如果有的话)</span></label>
                    <input type="text" id="invitation_code" name="invitation_code" class="radius" autocomplete="off">
                </div>

                <button
                    class="btn w-full"
                    style="margin-bottom: 1.5rem;"
                    :disabled="loading"
                >
                    <span>点此注册</span>
                    <i class="iconfont icon-loading btn-loading" v-if="loading"></i>
                </button>

                <router-link to="/login" class="sub">已有账号？点此登录</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import utils from "@/utils";

export default {
    data() {
        return {
            loading: false,
        }
    },

    methods: {
        register(event) {
            const data = new FormData(event.target);
            const json = utils.toJSON(data);

            this.loading = true;
            this.api.post("/users/register", json).then(r => {
                this.message.success("注册成功！点击确定跳到登录页~", () => {
                    this.$router.push("/login");
                });
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>