import Vue from 'vue'
import Router from 'vue-router'
import VesselListView from '@/components/VesselListView'
import VesselsLiveView from '@/components/VesselsLiveView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VesselListView',
      component: VesselListView
    },
    {
      path: '/live',
      name: 'VesselLiveView',
      component: VesselsLiveView
    }
  ]
})
