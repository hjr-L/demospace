import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", component: Home },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        {path: "/dashboard", component: () => import("@/views/Dashboard.vue"), meta: {auth: true}}
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        next();
    } else {
        const token = localStorage.getItem("token");
        if (!token && to.meta.auth) {
            next("/login");
        } else {
            next();
        }
    }
});


export default router;