import Vue from 'vue'
import Router from 'vue-router'
import VesselsLiveView from '@/components/VesselsLiveView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VesselsLiveView',
      component: VesselsLiveView
    }
  ]
})
