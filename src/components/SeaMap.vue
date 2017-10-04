<template xmlns:v-tooltip="">
  <div v-if="vessel.MMSI===selectedVessel.MMSI">
  <gmap-map
    ref="seaMap"
    :center="center"
    :zoom="zoom"
    :options="{disableDefaultUI: true}"
    style="width: 100%; height: 400px"
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
    ></gmap-marker>
    <gmap-polyline :path="path"></gmap-polyline>
  </gmap-map>
    <v-btn
      class="blue" id="maptype"
      @click="showSeaMap=!showSeaMap"
      v-tooltip:left="{ html: showSeaMapToolTipText }"
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
    class="deep-orange" id="bigMap"
    @click="showBigMap=!showBigMap"
    v-tooltip:right="{ html: showBigMapToolTipText }"
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
    v-tooltip:left="{ html: followVesselToolTipText }"
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
        showSeaMapToolTipText: null,
        zoom: 12,
        showBigMap: false,
        showBigMapToolTipText: null,
        followVessel: true,
        followVesselToolTipText: null
      }
    },
    computed: {
      selectedVessel: function () {
        return this.$store.getters.selectedVessel
      },
      seaMapIcon: function () {
        if (this.showSeaMap) {
          this.showSeaMapToolTipText = 'hide sea map'
          return 'layers_clear'
        }
        this.showSeaMapToolTipText = 'show sea map'
        return 'layers'
      },
      bigMapIcon: function () {
        if (this.showBigMap) {
          this.showBigMapToolTipText = 'show big map'
          return 'fullscreen'
        }
        this.showBigMapToolTipText = 'show small map'
        return 'fullscreen_exit'
      },
      followVesselIcon: function () {
        if (this.followVessel) {
          this.followVesselToolTipText = 'follow vessel'
          return 'gps_fixed'
        }
        this.followVesselToolTipText = 'do not follow vessel'
        return 'gps_not_fixed'
      },
      path: function () {
        return this.$store.getters.selectedVesselPath
      },
      pathInMinutes: function () {
        return this.$store.getters.pathInMinutes
      }
    },
    watch: {
      'selectedVessel': function () {
        console.log('watch: selectedVessel')
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      'vessel': function () {
        console.log('watch: vessel')
        if (this.vessel.MMSI === this.$store.getters.selectedVessel.MMSI) {
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
        if (this.vessel.MMSI === this.$store.getters.selectedVessel.MMSI) {
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
        const t1 = moment(t2).subtract(this.$store.getters.pathInMinutes, 'minutes').toDate()
        this.$store.dispatch('fetchSelectedVesselPath', { mmsi: this.$store.getters.selectedVessel.MMSI, fromUTC: t1.toUTCString(), toUTC: t2.toUTCString() })
      }
    },
    mounted: function () {
      if (this.$refs.seaMap) {
        this.$refs.seaMap.$mapCreated.then(() => {
          this.$refs.seaMap.$mapObject.mapTypes.set('sjokartraster', new SeaMapType(window.google))
        })
      }
    }
  }
</script>
<style>
  #maptype {
    top: 12px;
    right: 12px
  }
  #zoomup {
  bottom: 82px;
  right: 12px
}
#zoomdown {
  bottom: 32px;
  right: 12px
}
#bigMap {
  top: 12px;
  left: 12px
}
#followVessel {
  top: 72px;
  right: 12px
}
</style>
