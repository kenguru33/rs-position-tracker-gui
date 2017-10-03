 <template>
    <v-container>
      <v-layout row wrap dark>
        <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="(vessel, i) in vessels" :key="vessel.MMSI"
            @click.native="selectVessel(vessel)"
            v-show="isVesselMoving(vessel) || !filterMovingVessels"
            >
              <div slot="header">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img :src="imgUrl+ '/' + vessel.MMSI + '.jpg'" alt=""/>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    {{ vessel.Ship_name }}
                  </v-list-tile-content>
                </v-list-tile>
              </div>
              <vessel-view :vessel="vessel"></vessel-view>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
<script>
  import VesselView from './VesselView.vue'
  import moment from 'moment'
  export default {
    components: {VesselView},
    data () {
      return {
        imgUrl: 'static/vessel-images'
      }
    },
    computed: {
      filterMovingVessels: function () {
        return this.$store.getters.filterMovingVessels
      },
      vessels: function () {
        return this.$store.getters.vessels
      },
      selectedVessel: function () {
        return this.$store.getters.selectedVessel
      }
    },
    methods: {
      isVesselMoving: function (vessel) {
        return vessel.SOG > 1
      },
      selectVessel (vessel) {
        this.$store.dispatch('selectVessel', vessel)
        const t2 = new Date()
        const t1 = moment(t2).subtract(this.$store.getters.pathInMinutes, 'minutes').toDate()
        this.$store.dispatch('fetchSelectedVesselPath', { mmsi: vessel.MMSI, fromUTC: t1.toUTCString(), toUTC: t2.toUTCString() })
      }
    }
  }
</script>

