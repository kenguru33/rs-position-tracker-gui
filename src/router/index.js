import Vue from 'vue'
import Router from 'vue-router'
import Vessels from '@/components/Vessels'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vessels',
      component: Vessels
    }
  ]
})
