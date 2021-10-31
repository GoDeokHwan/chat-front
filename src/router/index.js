import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
    // const isValidToken = !!localStorage.getItem('token')
    // try {
    //     if (isValidToken) {
    //
    //
    //     } else if (to.path === '/login') {
    //
    //     } else {
    //         next('login')
    //     }
    // } catch (e) {
    //     console.error(e)
    // }
// })
router.afterEach((to, from) => {
    const isValidToken = !!localStorage.getItem('token')
    try {
        if (isValidToken) {
            router.push('/home')
        } else {
            router.push('/login')
        }
    } catch (e) {
        console.error(e)
    }
})
export default router