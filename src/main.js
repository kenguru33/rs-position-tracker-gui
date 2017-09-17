import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAkkr1PCZqPd2S4-tX0ociz2-_mtdQsUcg',
    v: '3'
    // libraries: 'places', //// If you need to use place input
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
