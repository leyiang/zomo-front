import Vue from 'vue';
import App from './App.vue';
import router from './views/router';
import init from "./init";
import "./assets/css/style.css";

init( Vue );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
