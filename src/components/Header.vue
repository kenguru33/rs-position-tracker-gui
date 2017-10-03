<template>
  <div>
    <v-navigation-drawer absolute persistent light v-model="drawer" overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="http://0.gravatar.com/avatar/ca7cfccfd2da4f5ef8fb60d2ab065052?s=200&d=mm&r=g" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Bernt Anker</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ais-Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.stop="sheetVisable=!sheetVisable" class="btn--flat">
        <v-icon left>settings</v-icon>Options</v-btn>
    </v-toolbar>
    <div class="text-xs-center">
    <v-bottom-sheet v-model="sheetVisable">
      <v-list>
        <v-list-tile>
          <v-switch label="Moving Vessels" v-model="filterMovingVessels"></v-switch>
        </v-list-tile>
        <v-list-tile>
          <v-slider label="Track Path (minutes)" v-model="pathInMinutes" :max="500" thumb-label></v-slider>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
      drawer: null,
      items: [
        { title: 'Live View', icon: 'gps_fixed' },
        { title: 'Historical View', icon: 'access_time' },
        { title: 'Location View', icon: 'location_on' }
      ],
      sheetVisable: false
    }
  },
  computed: {
    filterMovingVessels: {
      get () { return this.$store.getters.filterMovingVessels },
      set (value) {
        this.$store.dispatch('setFilterMovingVessels', !this.filterMovingVessels)
      }
    },
    vessels: function () {
      return this.$store.getters.vessels
    },
    pathInMinutes: {
      get () { return this.$store.getters.pathInMinutes },
      set (minutes) {
        this.$store.dispatch('setPathInMinutes', minutes)
      }
    }
  }
}
</script>
