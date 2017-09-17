<template>
  <v-container>
    <v-layout row wrap dark>
      <v-flex xs12 lg5>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel,i) in vessels" :key="i" @click.native="reloadMap">
            <div slot="header">
              <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="http://www.ship-info.com/Vessels/LK3384.jpg" />
              </v-list-tile-avatar>
              {{vessel.Ship_name}}
              </v-list-tile>
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-card class="purple" dark>
                          <gmap-map
                            :center="center"
                            :zoom="7"
                            style="width: 100%; height: 400px">
                            <gmap-marker
                              :key="index"
                              v-for="(m, index) in markers"
                              :position="m.position"
                              :clickable="true"
                              :draggable="true"
                              @click="center=m.position"
                            ></gmap-marker>
                          </gmap-map>
                      </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md6>
                      <v-layout row wrap>
                        <v-flex d-flex>
                          <v-card class="indigo" dark>
                            <v-card-text
                              v-text="lorem.slice(0, 70)">
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex d-flex xs12 sm12 md12 child-flex>
                      <v-card class="green lighten-2" dark>
                        <v-card-text
                          v-text="lorem.slice(0, 90)">
                        </v-card-text>
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
  import VAvatar from '../../node_modules/vuetify/src/components/VAvatar/VAvatar.vue'
  export default {
    components: {VAvatar},
    data () {
      return {
        lorem: 'AIS DATA goes here',
        center: {lat: 62.0, lng: 10.0},
        markers: [{
          position: {lat: 62.0, lng: 10.0}
        }, {
          position: {lat: 63.0, lng: 11.0}
        }],
        vessels: []
      }
    },
    methods: {
      reloadMap: () => {
        console.log('koko')
        Vue.$gmapDefaultResizeBus.$emit('resize')
      }
    },
    created () {
      this.$http.get('http://aistracker.rs.no/api/get_moving_vessels')
        .then(vessels => {
          this.vessels = vessels.data
        })
    }
  }
</script>
