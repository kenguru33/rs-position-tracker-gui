<template>
  <gmap-map
    ref="buggabugga"
    :center="center"
    :zoom="7"
    style="width: 100%; height: 400px"
  >
    <gmap-marker
      ref="myMap"
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko',
      v: '3'
      // libraries: 'places', //// If you need to use place input
    }
  })

  export default {
    props: [
      'vessel'
    ],
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>
