import Vue from 'vue';
import App from './App.vue';
import router from './views/router';
import init from "./init";
import "./assets/css/style.css";
import utils from "./utils";

init(Vue);

new Vue({
    router,
    render: h => h(App),

    data() {
        return {
            token: null,
            user: null,

            currentCategoryID: null,
            categories: [],
            categoryREF: {},
        }
    },

    created() {
        this.getCategories();
        this.getToken();
        this.getUserInfo();
    },

    methods: {
        getToken() {
            this.token = utils.get("token") || null;
        },

        getUserInfo() {
            if (!this.token) return;

            this.api.get("/users/me").then(({data}) => {
                this.user = data;
            }).catch( e => {
                utils.remove("token");
                this.user = null;
            })
        },

        getCategories() {
            this.api.get("/menu").then(({data}) => {
                this.categories = data;
                this.currentCategoryID = data[0].id;
            });
        }
    },
}).$mount('#app')
