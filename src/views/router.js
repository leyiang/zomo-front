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

        {
            path: "/confirm/:hash",
            component: () => import("./confirm")
        }
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
            block.removeEventListener("animationend", start);

            next();

            setTimeout(() => {
                animationContainer.classList.toggle("start");
                animationContainer.classList.toggle("end");
            }, 500 );
        };

        block.addEventListener("animationend", start);
    }
});

export default router;
