import Vue from 'vue'
import Router from 'vue-router'
import VesselsLiveView from '@/components/VesselsLiveView'
import SeaMap from '@/components/SeaMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VesselsLiveView',
      component: VesselsLiveView
    },
    {
      path: '/seamap',
      name: 'SeaMap',
      component: SeaMap
    }
  ]
})
