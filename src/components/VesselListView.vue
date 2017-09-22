 <template>
    <v-container>
      <v-layout row wrap dark>
        <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="(vessel, i) in vessels" :key="vessel.MMSI" 
            @click.native="selectedVessel=vessel" 
            v-show="isVesselMoving(vessel) || !filterMovingVessels">
              <div slot="header">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" alt=""/>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    {{vessel.Ship_name}}
                  </v-list-tile-content>
                </v-list-tile>
              </div>
              <vessel-view :vessel="vessel" :selectedVessel="selectedVessel"></vessel-view>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
<script>
  import VesselView from './VesselView.vue'

  export default {
    components: {VesselView},
    props: ['filterMovingVessels'],
    data () {
      return {
        vessels: [],
        imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
        selectedVessel: null
      }
    },
    methods: {
      isVesselMoving: function (vessel) {
        return vessel.SOG > 1
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
</script>

