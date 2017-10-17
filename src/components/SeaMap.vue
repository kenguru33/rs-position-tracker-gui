<template>
  <div>
  <gmap-map
    ref="seaMap"
    :center="center"
    :zoom="zoom"
    :options="{disableDefaultUI: true}"
    :style=style
    map-type-id="roadmap"
    @dragend="centerToVessel"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center=m.position"
      :icon="icon"
    ></gmap-marker>
    <gmap-polyline :path="path" :options="polyOptions"></gmap-polyline>
  </gmap-map>
    <v-btn
      class="blue" id="maptype"
      @click="showSeaMap=!showSeaMap"
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
    class="green" id="zoomup"
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
    class="deep-orange" id="bigMap"
    @click="showBigMap=!showBigMap"
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
    class="pink" id="followVessel"
    @click="followVessel=!followVessel"
    dark
    small
    absolute
    top
    right
    fab
  >
    <v-icon>{{followVesselIcon}}</v-icon>
  </v-btn>
  </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import moment from 'moment'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCCFWll4oEjXml1BVeZ3-x1TZphNVx8yko',
      v: '3'
    }
  })

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
    props: {
      vessel: null
    },
    data () {
      return {
        center: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) },
        markers: [{
          position: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        }],
        showSeaMap: false,
        zoom: 12,
        showBigMap: false,
        followVessel: true,
        style: 'width: 100%; height: 400px'
      }
    },
    computed: {
      selectedVessel: function () {
        return this.$store.getters.selectedVessel
      },
      seaMapIcon: function () {
        if (this.showSeaMap) {
          return 'layers_clear'
        }
        return 'layers'
      },
      bigMapIcon: function () {
        if (this.showBigMap) {
          this.style = 'width: 100%; height: 600px'
          return 'fullscreen'
        }
        this.style = 'width: 100%; height: 400px'
        return 'fullscreen_exit'
      },
      followVesselIcon: function () {
        if (this.followVessel) {
          return 'gps_fixed'
        }
        return 'gps_not_fixed'
      },
      path: function () {
        return this.$store.getters.selectedVesselPath
      },
      pathInMinutes: function () {
        return this.$store.getters.pathInMinutes
      },
      icon: function () {
        if (!window.google) {
          return
        }
        let sog = parseFloat(this.vessel.SOG) * 4 + 73.362
        console.log(sog)
        return {
          // path: 'M -1.1500216e-4,0 C 0.281648,0 0.547084,-0.13447 0.718801,-0.36481 l 17.093151,-22.89064 c 0.125766,-0.16746 0.188044,-0.36854 0.188044,-0.56899 0,-0.19797 -0.06107,-0.39532 -0.182601,-0.56215 -0.245484,-0.33555 -0.678404,-0.46068 -1.057513,-0.30629 l -11.318243,4.60303 0,-26.97635 C 5.441639,-47.58228 5.035926,-48 4.534681,-48 l -9.06959,0 c -0.501246,0 -0.906959,0.41772 -0.906959,0.9338 l 0,26.97635 -11.317637,-4.60303 c -0.379109,-0.15439 -0.812031,-0.0286 -1.057515,0.30629 -0.245483,0.33492 -0.244275,0.79809 0.0055,1.13114 L -0.718973,-0.36481 C -0.547255,-0.13509 -0.281818,0 -5.7002158e-5,0 Z',
          // strokeColor: 'black',
          // strokeOpacity: 0.1,
          // strokeWeight: 0.2,
          // fillColor: '#ac0506',
          // fillOpacity: 0.9,
          // scale: 0.5,
          // rotation: parseFloat(this.vessel.COG)
          //
          // path: 'M68.501,-15.781 43.752,38.529 66.918,51.695 66.918,' + sog + ' 70.085,' + sog + ' 70.085,51.694 93.249,38.529',
          path: 'M68.501,23.781 43.752,48.529 66.918,71.695 66.918,' + sog + ' 70.085,' + sog + ' 70.085,71.694 93.249,48.529',
          fillColor: parseFloat(this.vessel.SOG) > 20 ? '#FF0000' : '#007e00',
          fillOpacity: 1,
          anchor: new window.google.maps.Point(70.085, 30),
          strokeColor: parseFloat(this.vessel.SOG) > 20 ? '#FF0000' : '#007e00',
          strokeWeight: 1,
          strokeOpacity: 1,
          scale: 0.3,
          rotation: parseFloat(this.vessel.COG)
        }
      },
      polyOptions: function () {
        if (!window.google) {
          return
        }
        return {
          strokeColor: '#0026b3',
          strokeOpacity: 1.0,
          strokeWeight: 1,
          geodesic: true,
          icons: [{
            icon: {
              path: window.google.maps.SymbolPath.FORWARD_OPEN_ARROW,
              scale: 1.5
            },
            repeat: '100px'
          }]
        }
      }
    },
    watch: {
      'selectedVessel': function () {
        console.log('watch: selectedVessel')
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      'vessel': function () {
        console.log('vessel update: ', this.vessel.MMSI)
        if (this.vessel.MMSI === this.selectedVessel.MMSI) {
          this.$store.dispatch('addToPath', { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) })
          if (this.followVessel) {
            this.center = { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
          }
          this.markers = [{
            position: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
          }]
        }
      },
      'showSeaMap': function () {
        if (this.showSeaMap) {
          this.$refs.seaMap.$mapObject.setMapTypeId('sjokartraster')
        } else {
          this.$refs.seaMap.$mapObject.setMapTypeId('roadmap')
        }
      },
      'showBigMap': function () {
        this.$emit('showBigMap')
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      'followVessel': function () {
        console.log('watch: followVessel')
        this.centerToVessel()
      },
      'pathInMinutes': function () {
        console.log('watch: pathInMinutes')
        if (this.vessel.MMSI === this.selectedVessel.MMSI) {
          this.refetchPath()
        }
      }
    },
    methods: {
      centerToVessel () {
        console.log('method: centerToVessel')
        if (this.followVessel) {
          this.$refs.seaMap.$mapObject.setCenter(this.markers[0].position)
        }
      },
      refetchPath () {
        console.log('method: refetchPath')
        const t2 = new Date()
        const t1 = moment(t2).subtract(this.pathInMinutes, 'minutes').toDate()
        this.$store.dispatch('fetchSelectedVesselPath', { mmsi: this.selectedVessel.MMSI, fromUTC: t1.toUTCString(), toUTC: t2.toUTCString() })
      }
    },
    mounted: function () {
      if (this.$refs.seaMap) {
        this.$refs.seaMap.$mapCreated.then(() => {
          this.$refs.seaMap.$mapObject.mapTypes.set('sjokartraster', new SeaMapType(window.google))
        })
      }
    },
    created: function () {
      console.log('created: ', this.vessel.MMSI)
    }
  }
</script>
<style>
  #maptype {
    top: 12px;
    right: 12px;
    z-index: 1;
  }
  #zoomup {
  bottom: 82px;
  right: 12px;
  z-index: 1;
}
#zoomdown {
  bottom: 32px;
  right: 12px;
  z-index: 1;
}
#bigMap {
  top: 12px;
  left: 12px;
  z-index: 1;
}
#followVessel {
  top: 72px;
  right: 12px;
  z-index: 1;
}
</style>
