import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import login from '@/page/login/login'
import incompleted from '@/components/incompleted'
import wxproject from '@/components/wxproject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
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
    },
    {
      path: '/wxproject',
      name: 'wxproject',
      component: wxproject
    }

  ]
})




