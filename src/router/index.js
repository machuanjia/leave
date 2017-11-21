import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/index'
import E404 from 'views/404'
import Login from 'views/login/login'

Vue.use(Router)

const Dashboard = () => import ('views/dashboard/dashboard')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      // beforeEnter: (to, from, next) => {
          // next({
          //     path: '/login'
          // })
      // },
      redirect: '/dashboard',
      name: 'home',
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      }]
    }, {
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
