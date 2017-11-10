import Vue from 'vue'
import Router from 'vue-router'
import VesselListView from '@/components/vessel/VesselListView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VesselListView',
      component: VesselListView
    }
  ],
  mode: 'history'
})
