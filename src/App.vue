<template>
  <v-app id="app-toolbar" toolbar>
    <app-header></app-header>
    <main>
      <v-container fluid>
        <!--v-router-->
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import AppHeader from './components/Header.vue'
let intervalId = null
export default {
  components: {AppHeader},
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Live View', icon: 'gps_fixed' },
        { title: 'Historical View', icon: 'access_time' },
        { title: 'Location View', icon: 'location_on' }
      ],
      sheetVisable: false
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
    intervalId = setInterval(() => {
      this.$store.dispatch('fetchVessels', 'https://ais.rs.no/aktive_pos.json')
    }, 30000)
  },
  destroyed () {
    clearInterval(intervalId)
  }
}
</script>
