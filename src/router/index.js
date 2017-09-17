import Vue from 'vue'
import Router from 'vue-router'
import Vessels from '@/components/Vessels'
import MovingVessels from '@/components/MovingVessels'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vessels',
      component: Vessels
    },
    {
      path: '/moving-vessels',
      name: 'MovingVessels',
      component: MovingVessels
    }
  ]
})
