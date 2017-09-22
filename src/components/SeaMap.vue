<template>
<div>
  <div class="google-map" :id="mapName">
    <p>Map is loading...</p>
  </div>
</div>
</template>
<script>
  import GoogleMapsLoader from 'google-maps'

  const SeaMapType = function (google) {
    this.tileSize = new google.maps.Size(256, 256)
    this.maxZoom = 19
    this.getTile = function (coord, zoom, ownerDocument) {
      const div = ownerDocument.createElement('DIV')
      div.style.width = '600px'
      div.style.height = '400px'
      div.style.backgroundImage = 'url(http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom=' + zoom + '&x=' + coord.x + '&y=' + coord.y + ')'
      return div
    }
  }

  export default {
    name: 'sea-map',
    props: {
      vessel: null,
      isSelected: false,
      zoom: {
        default: 10,
        type: Number
      }
    },
    data () {
      return {
        mapName: this.vessel.MMSI + '-map',
        map: null
      }
    },
    computed: {
      position: function () {
        if (!this.vessel) {
          return null
        }
        const coords = this.vessel.Long_Lat_Time.split(',')
        return {
          lng: parseFloat(coords[0]),
          lat: parseFloat(coords[1])
        }
      }
    },
    watch: {
      'isSelected': function () {
        console.log('resizeing map')
        this.moveTo()
      }
    },
    methods: {
      moveTo () {
        const centerPos = new window.google.maps.LatLng(this.position.lat, this.position.lng)
        window.google.maps.event.trigger(this.map, 'resize')
        this.map.panTo(centerPos)
      }
    },
    mounted: function () {
      GoogleMapsLoader.KEY = 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko'
      GoogleMapsLoader.onLoad(google => {
        console.log('I just loaded google maps api')
      })
      GoogleMapsLoader.load(google => {
        const el = document.getElementById(this.mapName)
        const options = {
          zoom: this.zoom,
          center: new google.maps.LatLng(this.position.lat, this.position.lng)
        }
        this.map = new google.maps.Map(el, options)
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.position.lat, this.position.lng),
          map: this.map,
          title: this.vessel.Ship_name
        })
        console.log(marker)
        // console.log(new SeaMapType(google))
        this.moveTo()
        this.map.mapTypes.set('sjokartraster', new SeaMapType(google))
        this.map.setMapTypeId('sjokartraster')
      })
    }
  }
</script>

<style scoped>
.google-map {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>
