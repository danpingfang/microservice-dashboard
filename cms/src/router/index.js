import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Center from 'components/Center'

import CenterA from 'components/Center/a'
import CenterB from 'components/Center/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Center',
      name: 'center',
      component: Center,
      children: [
        {
          path: '/Center/a',
          name: 'CenterA',
          component: CenterA
        },
        {
          path: '/Center/b',
          name: 'CenterB',
          component: CenterB
        }
      ]
    }
  ]
})
