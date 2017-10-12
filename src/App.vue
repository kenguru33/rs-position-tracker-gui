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
