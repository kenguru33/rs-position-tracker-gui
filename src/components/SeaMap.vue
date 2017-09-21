<template>
<div>
  <div class="google-map" :id="mapName">
    <p>SeaMap</p>
  </div>
  <button v-on:click="moveTo(60, 10)">PUSH</button>
</div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'
  import uuid from 'uuid/v1'

  const SeaMapType = function (google) {
    this.tileSize = new google.maps.Size(256, 256)
    this.maxZoom = 19
    this.getTile = function (coord, zoom, ownerDocument) {
      console.log(ownerDocument)
      const div = ownerDocument.createElement('DIV')
      div.style.width = '600px'
      div.style.height = '400px'
      div.style.backgroundImage = 'url(http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom=' + zoom + '&x=' + coord.x + '&y=' + coord.y + ')'
      console.log(div)
      return div
    }
  }

  export default {
    name: 'sea-map',
    props: {
      name: {
        default: 'seamap-' + uuid(),
        type: String
      },
      zoom: {
        default: 10,
        type: Number
      },
      center: {
        default: function () {
          return { lat: 60, lng: 9 }
        }
      },
      markers: {
        default: function () {
          return [{ lat: 60, lng: 9 }]
        }
      }
    },
    data () {
      return {
        mapName: this.name || 'seamap',
        map: null
      }
    },
    methods: {
      moveTo (lat, lng) {
        console.log('this', this)
        console.log('window', window)
        const pos = new window.google.maps.LatLng(this.center.lat, this.center.lng)
        console.log(this.map)
        this.map.setCenter(pos)
      }
    },
    watch: {
      //
    },
    mounted: function () {
      GoogleMapsLoader.KEY = 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko'
      GoogleMapsLoader.onLoad(function (google) {
        console.log('I just loaded google maps api')
      })
      GoogleMapsLoader.load(google => {
        const el = document.getElementById(this.mapName)
        const options = {
          zoom: this.zoom,
          center: new google.maps.LatLng(this.center)
        }
        this.map = new google.maps.Map(el, options)
        // console.log(new SeaMapType(google))
        this.map.mapTypes.set('sjokartraster', new SeaMapType(google))
        this.map.setMapTypeId('sjokartraster')
      })
    }
  }
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>
