import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('app/home/home')
const Login = () => import('app/home/home')

export default new Router({
  mode: 'history',
  routes: [
      {
          path: '/',
          redirect: '/home'
      },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
