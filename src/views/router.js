import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: () => import("./index")
        },

        {
            path: "/login",
            component: () => import("./login")
        },
    ]
});

export default router;
