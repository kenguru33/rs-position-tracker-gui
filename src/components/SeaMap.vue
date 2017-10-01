<template>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width: 100%; height: 400px"
  >
    <gmap-marker
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
    props: {
      vessel: null
    },
    data () {
      return {
        center: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) },
        markers: [{
          position: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        }]
      }
    },
    computed: {
      selectedVessel: function () {
        return this.$store.getters.selectedVessel
      }
    },
    watch: {
      'selectedVessel': function () {
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      'vessel': function () {
        console.log('updated center:', this.center.lat, this.center.lng)
        this.center = { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        this.markers = [{
          position: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        }]
      }
    }
  }
</script>
<style>

</style>
