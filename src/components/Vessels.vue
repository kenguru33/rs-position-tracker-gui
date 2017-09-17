<template>
  <v-container>
    <v-layout row wrap dark>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel,i) in movingVessels" :key="i" @click.native.stop="reloadMap(vessel, $event)">
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
                  {{vessel.Call_sign}}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-card>
                          <gmap-map
                            :center="center"
                            :zoom="12"
                            style="width: 100%; min-height: 100%">
                            <gmap-marker
                              :key="index"
                              v-for="(m, index) in markers"
                              :position="m.position"
                              :icon="m.icon"
                              :clickable="true"
                              :draggable="true"
                              @click="center=m.position"
                            ></gmap-marker>
                            <gmap-polygon :paths="paths">
                            </gmap-polygon>
                          </gmap-map>
                      </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-layout row wrap>
                        <v-flex d-flex>
                          <v-card>
                            <v-card-media :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" height="200px">
                            </v-card-media>
                            <v-card-title primary-title>
                              <div>
                                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                              </div>
                            </v-card-title>
                            <v-card-actions>
                              <v-btn flat class="orange--text">Share</v-btn>
                              <v-btn flat class="orange--text">Explore</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex d-flex xs12 sm12 md12 child-flex>
                      <v-card class="indigo">
                        <div class="text-xs-center">
                          <v-btn fab small dark primary>
                            <v-icon dark>remove</v-icon>
                          </v-btn>
                          <v-btn fab small dark class="pink">
                            <v-icon dark>favorite</v-icon>
                          </v-btn>
                          <v-btn fab small dark class="indigo">
                            <v-icon dark>add</v-icon>
                          </v-btn>
                          <v-btn fab small dark class="teal">
                            <v-icon dark>list</v-icon>
                          </v-btn>
                          <v-btn fab small dark class="cyan">
                            <v-icon dark>edit</v-icon>
                          </v-btn>
                        </div>
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
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        lorem: 'AIS DATA goes here',
        imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
        center: {lat: 0, lng: 0},
        markers: [],
        vessels: [],
        paths: []
      }
    },
    methods: {
      reloadMap: function (vessel, event) {
        let positions = vessel.Long_Lat_Time.split(',')
        positions = positions.filter((value, index) => {
          return (index + 1) % 3
        })
        this.markers = [{
          position: {lat: parseFloat(positions[1]), lng: parseFloat(positions[0])}
        }]
        this.center = {lat: parseFloat(positions[1]), lng: parseFloat(positions[0])}
        this.paths = []
        for (let i = 0; i < positions.length; i++) {
          this.paths.push({lat: parseFloat(positions[i + 1]), lng: parseFloat(positions[i])})
          i = i + 1
        }
        Vue.$gmapDefaultResizeBus.$emit('resize')
      }
    },
    computed: {
      movingVessels: function () {
        return this.vessels.filter(vessel => {
          return vessel.SOG > 0
        })
      }
    },
    created () {
      this.$http.get('http://ais.rs.no/aktive.json')
        .then(vessels => {
          this.vessels = vessels.data
        })
      setInterval(() => {
        console.log('update intervall')
        this.$http.get('http://ais.rs.no/aktive.json')
          .then(vessels => {
            this.vessels = vessels.data
            Vue.$gmapDefaultResizeBus.$emit('resize')
          })
      }, 5000)
    }
  }
</script>
