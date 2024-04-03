import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/index.vue")
  }
]