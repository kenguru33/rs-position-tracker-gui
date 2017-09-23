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
      selectedVessel: null,
      zoom: {
        default: 10,
        type: Number
      },
      showSeaMap: {
        defualt: false,
        type: Boolean
      }
    },
    data () {
      return {
        mapName: this.vessel.MMSI + '-map',
        map: null,
        marker: null,
        path: []
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
      },
      positions: function () {
        let positions = this.vessel.Long_Lat_Time.split(',')
        positions = positions.filter((value, index) => {
          return (index + 1) % 3
        })
        const p = []
        for (let i = 0; i < positions.length; i += 2) {
          p.push({lat: parseFloat(positions[i + 1]), lng: parseFloat(positions[i])})
        }
        return p
      }
    },
    watch: {
      'vessel': function () {
        this.moveToCenter()
      },
      'selectedVessel': function () {
        if (this.selectedVessel.MMSI === this.vessel.MMSI) {
          this.moveToCenter()
        }
      },
      'showSeaMap': function () {
        this.toggleSeaMap()
      }
    },
    methods: {
      moveToCenter () {
        // console.log('resize map', this.selectedVessel.MMSI)
        const centerPos = new window.google.maps.LatLng(this.position.lat, this.position.lng)
        window.google.maps.event.trigger(this.map, 'resize')
        if (centerPos) {
          this.map.panTo(centerPos)
        }
      },
      toggleSeaMap () {
        if (this.showSeaMap) {
          this.map.mapTypes.set('sjokartraster', new SeaMapType(window.google))
          this.map.setMapTypeId('sjokartraster')
        } else {
          this.map.setMapTypeId('roadmap')
        }
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
          center: new google.maps.LatLng(this.position.lat, this.position.lng),
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        }
        this.map = new google.maps.Map(el, options)
        /* eslint-disable no-new */
        new google.maps.Marker({
          position: new google.maps.LatLng(this.position.lat, this.position.lng),
          map: this.map,
          title: this.vessel.Ship_name
        })
        new google.maps.Polyline({
          path: this.positions,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: this.map
        })
        this.moveToCenter()
      })
    }
  }
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 420px;
  margin: 0 auto;
  background: gray;
}
</style>
