import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'app/containers/layout'

Vue.use(Router)

const Dashboard = () => import ('app/views/dashboard/dashboard')

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
        },

    ]
})
