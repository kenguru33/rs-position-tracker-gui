<template>
  <v-app id="app-toolbar" toolbar>
    <app-header></app-header>
    <main>
      <v-container fluid mt-4>
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
  </v-app>
</template>

<script>
import AppHeader from './components/Header.vue'
let intervalId = null
export default {
  components: {
    AppHeader},
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Live View', icon: 'gps_fixed' },
        { title: 'Historical View', icon: 'access_time' },
        { title: 'Location View', icon: 'location_on' }
      ],
      sheetVisable: false,
      snackbar: false
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
  created () {
    this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
    intervalId = setInterval(() => {
      this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
    }, 10000)
  },
  destroyed () {
    clearInterval(intervalId)
  }
}
</script>
