<template>
  <v-container>
    <v-layout row wrap dark>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="(vessel, i) in vessels" :key="vessel.MMSI" @click.native="selectVessel(vessel)">
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
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
        selectedVessel: null
      }
    },
    methods: {
      selectVessel: function (vessel) {
      }
    },
    created () {
      console.log('created')
      this.$http.get('https://ais.rs.no/aktive.json')
        .then(vessels => {
          console.log(vessels.data)
          this.vessels = vessels.data
        })
    }
  }
</script>
