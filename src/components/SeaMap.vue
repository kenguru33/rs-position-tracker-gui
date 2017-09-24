<template>
<div>
  <div class="google-map" :id="mapName">
    <p>Map is loading...</p>
  </div>
  <v-btn
    class="pink" id="zoomup"
    v-tooltip:left="{ html: 'Zoom In' }"
    @click="zoom++"
    dark
    small
    absolute
    bottom
    right
    fab
  >
    <v-icon>add</v-icon>
  </v-btn>
  <v-btn
    class="blue" id="zoomdown"
    v-tooltip:left="{ html: 'Zoom Out' }"
    @click="zoom--"
    dark
    small
    absolute
    bottom
    right
    fab
  >
    <v-icon>remove</v-icon>
  </v-btn>
  <v-btn
    class="blue" id="maptype"
    @click="showSeaMap=!showSeaMap"
    v-tooltip:left="{ html: 'Toggle Sea Map' }"
    dark
    small
    absolute
    top
    right
    fab
  >
    <v-icon>map</v-icon>
  </v-btn>
  <v-btn
    class="deep-orange" id="bigMap"
    @click="toggleBigMap"
    v-tooltip:right="{ html: 'Toggle Big Map' }"
    dark
    small
    absolute
    top
    left
    fab
  >
    <v-icon>aspect_ratio</v-icon>
  </v-btn>
  <v-btn
    class="blue-grey" id="timeStampMarkers"
    @click="timeStampMarkers=!timeStampMarkers"
    v-tooltip:left="{ html: 'Show Time Stamped Markers' }"
    dark
    small
    absolute
    top
    right
    fab
  >
    <v-icon>access_time</v-icon>
  </v-btn>
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
      selectedVessel: null
    },
    data () {
      return {
        mapName: this.vessel.MMSI + '-map',
        map: null,
        path: [],
        marker: null,
        showSeaMap: false,
        zoom: 12,
        bigMap: false,
        timeStampMarkers: false
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
        if (this.selectedVessel) {
          if (this.selectedVessel.MMSI === this.vessel.MMSI) {
            this.reloadMap()
          }
        }
      },
      'selectedVessel': function () {
        if (this.selectedVessel) {
          if (this.selectedVessel.MMSI === this.vessel.MMSI) {
            this.reloadMap()
          }
        }
      },
      'showSeaMap': function () {
        console.log('reloading map')
        this.toggleSeaMap()
      },
      'zoom': function () {
        this.map.setZoom(this.zoom)
      }
    },
    methods: {
      reloadMap () {
        const centerPos = new window.google.maps.LatLng(this.position.lat, this.position.lng)
        this.marker = new window.google.maps.Marker(this.position)
        if (centerPos) {
          this.map.setCenter(centerPos)
          this.marker = new window.google.maps.Marker(this.position)
          if (!this.timeStampMarkes) {
            console.log('find a way to clear markers')
          }
          // eslint-disable-next-line no-new
          new window.google.maps.Marker({
            position: this.marker,
            title: this.vessel.Time_stamp,
            map: this.map
          })
          this.path = new window.google.maps.Polyline({
            path: this.positions,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
          })
          this.path.setMap(this.map)
        }
        window.google.maps.event.trigger(this.map, 'resize')
      },
      toggleSeaMap () {
        if (this.showSeaMap) {
          this.map.mapTypes.set('sjokartraster', new SeaMapType(window.google))
          this.map.setMapTypeId('sjokartraster')
        } else {
          this.map.setMapTypeId('roadmap')
        }
      },
      toggleBigMap () {
        this.$emit('toggleBigMap')
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
          disableDefaultUI: true
        }
        this.map = new google.maps.Map(el, options)
        this.reloadMap()
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

#zoomup {
  bottom: 82px;
  right: 12px
}
#zoomdown {
  bottom: 32px;
  right: 12px
}

#maptype {
  top: 12px;
  right: 12px
}
#bigMap {
  top: 12px;
  left: 12px
}
#timeStampMarkers {
  top: 82px;
  right: 12px
}
</style>
