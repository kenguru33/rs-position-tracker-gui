<template>
  <v-card>
    <v-card-text class="grey lighten-3">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm12 md6 v-if="!showBigMap">
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card>
                  <v-card-media :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{vessel.Ship_name}}</h3>
                      <div>MMSI: {{vessel.MMSI}}</div>
                      <div>SOG: {{vessel.SOG}} knots - COG: {{vessel.COG}}°</div>
                      <div>Latitude: {{vessel.Latitude}} Longitude: {{vessel.Longitude}}</div>
                      <div>Navigation Status: {{vessel.Nav_Status}}</div>
                      <div>Last updated: {{new Date(vessel.Time_stamp).toLocaleString()}}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat class="orange--text" v-if="false">Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm12 md6 id="map">
            <v-card>
              <v-flex d-flex xs12>
                <sea-map :vessel="vessel" :selectedVessel="selectedVessel" :showSeaMap="showSeaMap" @toggleBigMap="showBigMap=!showBigMap"></sea-map>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import VIcon from '../../node_modules/vuetify/src/components/VIcon/VIcon.vue'

  export default {
    components: {VIcon},
    name: 'vessel-view',
    props: {
      vessel: null,
      selectedVessel: null
    },
    data: () => {
      return {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
        showSeaMap: false,
        showBigMap: false
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
      'selectedVessel': function () {
      }
    }
  }
</script>

<style scoped>
  #map {
    max-width: 100%
  }
</style>
