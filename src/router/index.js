import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import login from '@/page/login/login'
import incompleted from '@/components/incompleted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/incompleted',
      name: 'incompleted',
      component: incompleted
    }

  ]
})




 