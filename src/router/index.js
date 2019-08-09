import Vue from 'vue'
import Router from 'vue-router'
import { routerMaps } from './modules/meeting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/meeting'
    },
    {
      path: '/meeting',
      component: () => import('@/views/meeting'),
      redirect: '/meeting/home',
      meta: { title: '活动会议' },
      children: routerMaps
    },
    { path: '*', component: () => import('@/views/error/error400') }
  ]
})
