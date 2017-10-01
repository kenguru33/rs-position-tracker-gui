<template>
  <v-card v-if="vessel.MMSI === mmsi">
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
                      <h3 class="headline mb-0">{{ vessel.Ship_name }}</h3>
                      <div>MMSI: {{ vessel.MMSI }}</div>
                      <div>SOG: {{ vessel.SOG }} knots - COG: {{vessel.COG}}°</div>
                      <div>Latitude: {{ vessel.Latitude }} Longitude: {{ vessel.Longitude }}</div>
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
                <sea-map :vessel="vessel"></sea-map>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import SeaMap from '../SeaMap.vue'

  export default {
    components: {SeaMap},
    name: 'vessel-view',
    props: {
      mmsi: null
    },
    data: function () {
      return {
        imgUrl: 'static/vessel-images'
      }
    },
    computed: {
      vessel: function () {
        return this.$store.getters.vessels.find((vessel) => {
          return vessel.MMSI === this.mmsi
        })
      }
    }
  }
</script>

<style scoped>
  #map {
    max-width: 100%
  }
</style>
