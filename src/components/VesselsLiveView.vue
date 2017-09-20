<template>
  <v-container>
    <v-layout row wrap dark>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel, i) in movingVessels" :key="vessel.MMSI" @click.native="reloadMap(vessel)">
            <div slot="header">
              <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{vessel.Ship_name}}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{vessel.MMSI}}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex d-flex xs12 sm12 md6>
                      <v-layout row wrap>
                        <v-flex d-flex>
                          <v-card>
                            <v-card-media :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" height="200px">
                            </v-card-media>
                            <v-card-title primary-title>
                              <div>
                                <h3 class="headline mb-0">{{vessel.Ship_name}}</h3>
                                <div>SOG: {{vessel.SOG}} knots - COG: {{vessel.COG}}°</div>
                                <div>Latitude: {{vessel.Latitude}} Longitude: {{vessel.Longitude}}</div>
                                <div>Last updated: {{new Date(vessel.Time_stamp).toLocaleString()}}</div>
                              </div>
                            </v-card-title>
                            <v-card-actions>
                              <v-btn flat class="orange--text">Share</v-btn>
                              <v-btn flat class="orange--text" @click="showMap=!showMap">Toggle Map</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex d-flex xs12 sm12 md6>
                      <v-card>
                        <sea-map :name="vessel.MMSI"></sea-map>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="timeout"
      :success="context === 'success'"
      :info="context === 'info'"
      :warning="context === 'warning'"
      :error="context === 'error'"
      :primary="context === 'primary'"
      :secondary="context === 'secondary'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    <sea-map></sea-map>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: [
      'onlyMovingVessels'
    ],
    data () {
      return {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
        center: {lat: 0, lng: 0},
        markers: [],
        vessels: [],
        paths: [],
        selectedVessel: null,
        snackbar: false,
        context: '',
        mode: '',
        timeout: 3000,
        text: ''
      }
    },
    methods: {
      reloadMap: function (vessel) {
        this.selectedVessel = vessel
        let positions = vessel.Long_Lat_Time.split(',')
        positions = positions.filter((value, index) => {
          return (index + 1) % 3
        })
        this.markers = [{
          position: {lat: parseFloat(positions[1]), lng: parseFloat(positions[0])}
        }]
        this.center = {lat: parseFloat(positions[1]), lng: parseFloat(positions[0])}
        this.paths = []
        for (let i = 0; i < positions.length; i += 2) {
          this.paths.push({lat: parseFloat(positions[i + 1]), lng: parseFloat(positions[i])})
        }
        Vue.$gmapDefaultResizeBus.$emit('resize')
      },
      showMsgBox (text, context) {
        this.text = text
        this.context = context
        this.snackbar = true
      }
    },
    computed: {
      movingVessels: function () {
        if (!this.onlyMovingVessels) {
          return this.vessels
        }
        return this.vessels.filter(vessel => {
          return isVesselMoving(vessel)
        })
      }
    },
    watch: {
      'vessels': function () {
        if (!this.selectedVessel) {
          return
        }
        let vessel = this.vessels.find(v => {
          return v.MMSI === this.selectedVessel.MMSI
        })
        if (vessel.Time_stamp !== this.selectedVessel.Time_stamp) {
          this.reloadMap(vessel)
          isVesselMoving(this.selectedVessel) ? this.showMsgBox(this.selectedVessel.Ship_name + ': info updated', 'info') : this.showMsgBox(this.selectedVessel.Ship_name + ' has stopped!', 'error')
        }
      }
    },
    created () {
      this.$http.get('https://ais.rs.no/aktive.json')
        .then(vessels => {
          this.vessels = vessels.data
        })
      setInterval(() => {
        this.$http.get('https://ais.rs.no/aktive.json')
          .then(vessels => {
            this.vessels = vessels.data
          })
      }, 5000)
    }
  }
  const isVesselMoving = function (vessel) {
    return vessel.SOG > 1
  }
</script>
