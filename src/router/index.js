import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/index'
import Login from 'views/login'
import E404 from 'views/404'

Vue.use(Router)

const Dashboard = () => import ('views/dashboard/dashboard')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            name: 'home',
            children: [{
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard
            }]
        },{
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            name: '404',
            component: E404
        }

    ]
})
