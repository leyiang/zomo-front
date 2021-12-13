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
            path: "/detail/:id",
            component: () => import("./detail")
        },

        {
            path: "/my",
            component: () => import("./my")
        },
    ]
});

let init = true;

router.beforeEach( (to, from, next) => {
    if( init ) {
        init = false;
        next();
    } else {
        animationContainer.classList.toggle("start");
        animationContainer.classList.toggle("end");

        const block = animationContainer.querySelectorAll(".block")[2];

        const start = () => {
            next();
            animationContainer.classList.toggle("start");
            animationContainer.classList.toggle("end");

            block.removeEventListener("animationend", start);
        };

        block.addEventListener("animationend", start);
    }
});

export default router;
