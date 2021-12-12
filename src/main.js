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
      this.api.get("/categories").then( ({data}) => {
        this.categories = data;

        let ref = {};
        this.categories.forEach( category => {
          ref[ category.id ] = category;
          category.children = [];
        });

        this.categories.forEach( category => {
          if( category.parent !== 0 && ref[ category.parent ]) {
            ref[ category.parent ].children.push( category );
            utils.splice( this.categories, category );
          }
        });

        this.categoryREF = ref;
      });
    }
  },
}).$mount('#app')
