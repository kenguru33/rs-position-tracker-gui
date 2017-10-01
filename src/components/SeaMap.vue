<template xmlns:v-tooltip="">
  <div>
  <gmap-map
    ref="seaMap"
    :center="center"
    :zoom="zoom"
    :options="{disableDefaultUI: true}"
    style="width: 100%; height: 400px"
    map-type-id="roadmap"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center=m.position"
    ></gmap-marker>
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
  </div>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

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
        zoom: 12
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
      }
    },
    watch: {
      'selectedVessel': function () {
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      'vessel': function () {
        this.center = { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        this.markers = [{
          position: { lat: parseFloat(this.vessel.Decimal_Latitude), lng: parseFloat(this.vessel.Decimal_Longitude) }
        }]
      },
      'showSeaMap': function () {
        if (this.showSeaMap) {
          this.$refs.seaMap.$mapObject.setMapTypeId('sjokartraster')
        } else {
          this.$refs.seaMap.$mapObject.setMapTypeId('roadmap')
        }
      }
    },
    methods: {
    },
    mounted: function () {
      this.$refs.seaMap.$mapCreated.then(() => {
        this.$refs.seaMap.$mapObject.mapTypes.set('sjokartraster', new SeaMapType(window.google))
      })
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
</style>
