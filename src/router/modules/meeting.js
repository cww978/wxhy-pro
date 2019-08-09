export const routerMaps = [
  {
    path: '/meeting/home',
    mame: 'Home',
    component: () => import('@/views/meeting/home'),
    meta: { type: 'page', title: '首页', icon: '' }
  },
  {
    path: '/meeting/speak',
    mame: 'Speak',
    component: () => import('@/views/meeting/speak'),
    meta: { type: 'menu', title: '互动发言', icon: '' }
  },
  {
    path: '/meeting/questions',
    mame: 'Questions',
    component: () => import('@/views/meeting/questions'),
    meta: { type: 'menu', title: '互动答题', icon: '' }
  },
  {
    path: '/meeting/vote',
    mame: 'Vote',
    component: () => import('@/views/meeting/vote'),
    meta: { type: 'menu', title: '互动投票', icon: '' }
  },
  {
    path: '/meeting/vote/detail',
    mame: 'Detail',
    component: () => import('@/views/meeting/vote/detail'),
    meta: { type: 'page', title: '请投票', icon: '' }
  },
  {
    path: '/meeting/shake',
    mame: 'Shake',
    component: () => import('@/views/meeting/shake'),
    meta: { type: 'menu', title: '摇一摇', icon: '' }
  },

  {
    path: '/meeting/product',
    mame: 'Product',
    component: () => import('@/views/meeting/product/index'),
    meta: { type: 'menu', title: '产品展示', icon: '' }
  },
  {
    path: '/meeting/myPrize',
    mame: 'MyPrize',
    component: () => import('@/views/meeting/myPrize'),
    meta: { type: 'menu', title: '我的奖品', icon: '' }
  }
]
