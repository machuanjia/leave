import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/index'
import E404 from 'views/404'
import Login from 'views/login/login'

Vue.use(Router)

const Dashboard = () => import ('views/dashboard/dashboard')

const DemoList = ()=> import ('views/demo/list')

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
      },{
        path:'demo',
        name:'demo',
        component:DemoList
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
