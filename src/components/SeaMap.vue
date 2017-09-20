<template>
<div class="google-map" :id="mapName">
  <p>SeaMap</p>
</div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  import uuid from 'uuid/v1'
  export default {
    name: 'sea-map',
    props: {
      name: {
        default: 'seamap-' + uuid(),
        type: String
      },
      zoom: {
        default: 6,
        type: Number
      },
      center: {
        default: function () {
          return { lat: 60, lng: 10 }
        }
      }
    },
    data () {
      return {
        mapName: this.name || 'seamap',
        map: null
      }
    },
    mounted: function () {
      GoogleMapsLoader.KEY = 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko'
      GoogleMapsLoader.onLoad(function (google) {
        console.log('I just loaded google maps api')
      })
      GoogleMapsLoader.load((google) => {
        const el = document.getElementById(this.mapName)
        const options = {
          zoom: this.zoom,
          center: new google.maps.LatLng(this.center)
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
