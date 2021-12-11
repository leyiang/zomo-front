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

        {
            path: "/register",
            component: () => import("./register")
        },

        {
            path: "/category/:id",
            component: () => import("./category")
        },

        {
            path: "/detail",
            component: () => import("./detail")
        },

        {
            path: "/my",
            component: () => import("./my")
        },
    ]
});

export default router;
