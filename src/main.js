import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import SeaMap from '@/components/SeaMap'
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('sea-map', SeaMap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
