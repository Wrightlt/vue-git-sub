
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const PDM = () => import(/* webpackChunkName: "login" */ '../views/pdm/Pdm.vue')
const ABOUT = () => import(/* webpackChunkName: "login" */ '../views/about/About.vue')
const routes = [
    {
        path: '/',
        name: 'pdm',
        meta: { title: 'Pdm页面'},
        component: PDM
    },
    {
        path: '/about',
        name: 'about',
        meta: { title: 'about页面'},
        component: ABOUT
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
