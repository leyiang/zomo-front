import Vue from 'vue';
import App from './App.vue';
import router from './views/router';
import init from "./init";
import "./assets/css/style.css";
import utils from "./utils";

init( Vue );

new Vue({
  router,
  render: h => h(App),

  data() {
    return {
      token: null,
      user: {},

      currentCategoryID: null,
      categories: [],
      categoryREF: {},
    }
  },

  created() {
    this.getToken();
    this.getUserInfo();
    this.getCategories();
  },

  methods: {
    getToken() {
      this.token = utils.get("token") || null;
    },

    getUserInfo() {
      if( ! this.token ) return;

      this.api.get("/users/me").then( ({ data }) => {
        this.user = data;
      });
    },

    getCategories() {
      this.api.get("/menu").then( ({data}) => {
        this.categories = data;
        this.currentCategoryID = data[0].id;
      });
    }
  },
}).$mount('#app')
