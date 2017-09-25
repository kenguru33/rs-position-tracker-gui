<template>
<div>
  <div class="google-map" :id="mapName">
    <p>Map is loading...</p>
  </div>
  <v-btn
    class="green" id="zoomup"
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
    class="red" id="zoomdown"
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
    <v-icon>{{seaMapIcon}}</v-icon>
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
    <v-icon>{{bigMapIcon}}</v-icon>
  </v-btn>
  <v-btn
    class="blue-grey" id="timeStampMarkers"
    @click="getMarkerHistory"
    v-tooltip:left="{ html: 'Show Time Stamped Markers' }"
    dark
    small
    absolute
    top
    right
    fab
    v-if="false"
  >
    <v-icon>access_time</v-icon>
  </v-btn>
  <v-btn
    class="pink" id="followVessel"
    @click="follow=!follow"
    v-tooltip:left="{ html: 'Lock on vessel' }"
    dark
    small
    absolute
    top
    right
    fab
  >
    <v-icon>{{this.lockOnVesselIcon}}</v-icon>
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
        follow: true,
        markerHistory: [],
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
      },
      lockOnVesselIcon: function () {
        if (this.follow) {
          return 'lock'
        }
        return 'lock_open'
      },
      seaMapIcon: function () {
        if (this.showSeaMap) {
          return 'layers_clear'
        }
        return 'layers'
      },
      bigMapIcon: function () {
        if (this.bigMap) {
          return 'fullscreen_exit'
        }
        return 'fullscreen'
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
        if (centerPos && this.follow) {
          this.map.setCenter(centerPos)
          this.marker.setPosition(centerPos)
          this.marker.setTitle(new Date(this.vessel.Time_stamp).toLocaleString())
          this.markerHistory.push(this.marker)
          this.path = new window.google.maps.Polyline({
            path: this.positions,
            geodesic: true,
            strokeColor: '#676a6a',
            strokeOpacity: 1.0,
            strokeWeight: 3.0
          })
          this.path.setMap(this.map)
        }
        window.google.maps.event.trigger(this.map, 'resize')
      },
      placeAllMarkers () {
        this.markerHistory.map(mark => {
          this.mark.setMap(mark)
        })
      },
      removeAllMarkers () {
        this.markerHistory.map(mark => {
          this.mark.setMap(null)
        })
        this.markerHistory = []
      },
      getMarkerHistory () {
        console.log(this.markerHistory)
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
        this.bigMap = !this.bigMap
      }
    },
    mounted: function () {
      GoogleMapsLoader.KEY = 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko'
      GoogleMapsLoader.onLoad(google => {
        // console.log('I just loaded google maps api')
      })
      GoogleMapsLoader.load(google => {
        const el = document.getElementById(this.mapName)
        const options = {
          zoom: this.zoom,
          center: new google.maps.LatLng(this.position.lat, this.position.lng),
          disableDefaultUI: true
        }
        this.map = new google.maps.Map(el, options)
        this.marker = new window.google.maps.Marker({
          position: this.marker,
          map: this.map
        })
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
#followVessel {
  top: 72px;
  right: 12px
}
</style>
