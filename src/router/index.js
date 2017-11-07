import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
const background = r => require.ensure([], () => r(require('../views/background/background.vue')), 'Index')
// const pandect = r => require.ensure([], () => r(require('../views/background/content/pandect.vue')), 'Index')
const business = r => require.ensure([], () => r(require('../views/business/business.vue')), 'Index')
const client = r => require.ensure([], () => r(require('../views/client/client.vue')), 'Index')
const jurisdiction = r => require.ensure([], () => r(require('../views/jurisdiction/jurisdicion.vue')), 'Index')
const user = r => require.ensure([], () => r(require('../views/user/user.vue')), 'Index')



import backContent from './backContent.js'
import businessContent from './businessContent.js'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   // name: 'index',
    //   // component: index,
    //   redirect: backContent
    // },
    {
      path: '/',
      component: index,
      // redirect: pandect,
      children: [
        {
          path: '',
          component: background,
          children: backContent
        },
        {
          path: '/business',
          component: business,
          children: businessContent
        },
        {
          path: '/client',
          component: client,
          // children: businessContent
        },
        {
          path: '/jurisdiction',
          component: jurisdiction,
          // children: businessContent
        },
        {
          path: '/user',
          component: user,
          // children: businessContent
        },
      ]
    }
  ]
})
