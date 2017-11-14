import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'containers/layout'

Vue.use(Router)

const Home = () => import ('app/home/home')
const Login = () => import('app/home/home')

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/index',
            name: 'home',
            children: [{
                path: 'index',
                name: 'index',
                component: Home
            },{
                path: 'login',
                name: 'Login',
                component: Login
            }]
        },

    ]
})
