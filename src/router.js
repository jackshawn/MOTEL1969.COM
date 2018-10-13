import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Analysis from '@/components/Analysis'
import About from '@/components/About'
// import Login from '@/components/Login'
// import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     component: Home
        // },
        {
            path: '/home',
            component: Home
        },
        // {
        //     path: '/login',
        //     component: Login
        // },
        // {
        //     path: '/admin',
        //     component: Admin
        // },
        {
            path: '/analysis',
            component: Analysis
        },
        {
            path: '/about',
            component: About
        },
    ]
})
