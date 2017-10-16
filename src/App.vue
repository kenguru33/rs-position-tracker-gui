<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <main>
      <v-container fluid class="mt-4">
        <!--v-router-->
        <router-view></router-view>
      </v-container>
    </main>
    <v-snackbar
      :timeout="6000"
      :top="true"
      v-model="snackbar"
    >
      <v-icon dark left>error</v-icon><span class="ml-2">{{ error }}</span>
      <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar
      :timeout="10000"
      v-model="snackbarVesselState"
    >
      <v-avatar size="24px" class="mr-1">
        <img :src="snackbarVesselImage">
      </v-avatar>
        <span class="ml-2">{{ vesselStateInfo }}</span>
      <v-btn flat class="pink--text" @click.native="snackbarVesselState = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import AppToolbar from './components/lib/Toolbar.vue'
let intervalId = null
export default {
  components: {
    AppToolbar
  },
  data () {
    return {
      snackbar: false,
      snackbarVesselState: false,
      snackbarVesselImage: '',
      vesselStateInfo: ''
    }
  },
  computed: {
    error () {
      const err = this.$store.getters.errors
      if (err) {
        this.snackbar = true
        return err.message
      }
    }
  },
  methods: {
    isVesselMoving: function (vessel) {
      return vessel.SOG > 1
    },
    hasVesselStateChanged: function (vessel) {
      if (!this.isVesselMoving(vessel) && this.$store.getters.movingVessels.find(t => { return t.MMSI === vessel.MMSI }) || this.isVesselMoving(vessel) && !this.$store.getters.movingVessels.find(t => { return t.MMSI === vessel.MMSI })) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
      .then(() => {
        // const movingVessels = []
        // const haltedVessels = []
        this.$store.dispatch('setMovingVessels', [])
        this.$store.dispatch('setHaltedVessels', [])
        this.$store.getters.vessels.map(vessel => {
          // this.isVesselMoving(vessel) ? movingVessels.push(vessel) : haltedVessels.push(vessel)
          this.isVesselMoving(vessel) ? this.$store.dispatch('addMovingVessel', vessel) : this.$store.dispatch('addHaltedVessel', vessel)
        })
        // this.$store.dispatch('setMovingVessels', movingVessels)
        // this.$store.dispatch('setHaltedVessels', haltedVessels)
      })
    intervalId = setInterval(() => {
      this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
        .then(() => {
          this.$store.getters.vessels.map(vessel => {
            if (this.hasVesselStateChanged(vessel)) {
              if (this.isVesselMoving(vessel)) {
                console.log(`add ${vessel.Ship_name} to moving vessel list`)
                this.vesselStateInfo = `${vessel.Ship_name} is on the move!`
                this.snackbarVesselImage = `/static/vessel-images/${vessel.MMSI}.jpg`
                this.snackbarVesselState = true
                this.$store.dispatch('removeHaltedVessel', vessel)
                this.$store.dispatch('addMovingVessel', vessel)
              } else {
                console.log(`add ${vessel.Ship_name} to halted vessel list`)
                this.vesselStateInfo = `${vessel.Ship_name} has come to a halt!`
                this.snackbarVesselImage = `static/vessel-images/${vessel.MMSI}.jpg`
                this.snackbarVesselState = true
                this.$store.dispatch('removeMovingVessel', vessel)
                this.$store.dispatch('addHaltedVessel', vessel)
              }
            }
          })
        })
    }, 10000)
  },
  destroyed () {
    clearInterval(intervalId)
  }
}
</script>
