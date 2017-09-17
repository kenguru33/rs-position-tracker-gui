<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer temporary v-model="drawer" light overflow absolute>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="http://www.tryggferdsel.no/images/redningsselskapet-skisse-skoyte-front.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Api funksjonalitet</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="white--text indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>RS Ais-Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="btn--flat">
        <v-icon left>help</v-icon>Hjelp</v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import VBtn from '../node_modules/vuetify/src/components/VBtn/VBtn.vue'

export default {
  components: { VBtn },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Fartøy i bevegelse', icon: 'explore' },
        { title: 'Historisk posisjon', icon: 'gps_fixed' },
        { title: 'TTG', icon: 'access_time' },
        { title: 'Utlagt distanse', icon: 'straighten' },
        { title: 'Nå posisjon', icon: 'location_on' }
      ],
      right: null
    }
  }
}
</script>
