<template>
<div class="google-map" :id="mapName">
  <p>SeaMap</p>
</div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    name: 'sea-map',
    props: ['name'],
    data () {
      return {
        mapName: this.mapName || 'seamap',
        map: null
      }
    },
    mounted: function () {
      console.log('outside', this)
      GoogleMapsLoader.KEY = 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko'
      GoogleMapsLoader.onLoad(function (google) {
        console.log('I just loaded google maps api')
      })
      GoogleMapsLoader.load((google) => {
        const el = document.getElementById(this.mapName)
        const options = {
          zoom: 10,
          center: new google.maps.LatLng(60, 11)
        }
        this.map = new google.maps.Map(el, options)
      })
    }
  }
</script>

<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
