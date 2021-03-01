import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path:'/contact/add', name:'AddContact', component: () => import('../views/contact/Add.vue') },
  { path:'/contact', name:'ListContact', component: () => import('../views/contact/List.vue') },
  { path:'/contact/edit/:slug', name:'EditContact', component: () => import('../views/contact/Edit.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
