import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Maneger from './views/Maneger'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/maneger',
      name: 'maneger',
      component: Maneger
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router