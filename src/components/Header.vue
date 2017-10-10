<template>
  <div>
    <v-toolbar fixed class="red darken-2" dark>
      <!--v-toolbar-side-icon @click.stop="extendedToolBar = !extendedToolBar"></v-toolbar-side-icon-->
      <v-toolbar-title>Ais-Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="sheetVisable=!sheetVisable">
      <v-icon>settings</v-icon></v-btn>
      <tool-bar slot="extension" v-if="extendedToolBar"></tool-bar>
    </v-toolbar>
    <div class="text-xs-center">
    <v-bottom-sheet v-model="sheetVisable">
      <v-list>
        <v-list-tile>
          <v-slider label="Track Path (minutes)" v-model="pathInMinutes" :max="1000" thumb-label></v-slider>
          <v-btn icon @click="sheetVisable=!sheetVisable"><v-icon>close</v-icon></v-btn>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</div>
</template>

<script>
import SearchField from './SearchField'
import DataTimePicker from './DateTimePicker'
import ToolBar from './ToolBar'
export default {
  components: {
    SearchField,
    DataTimePicker,
    ToolBar
  },
  name: 'app-header',
  data () {
    return {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/rs-storage-01/vessel-images',
      items: [
        { title: 'Live View', icon: 'gps_fixed' },
        { title: 'Historical View', icon: 'access_time' },
        { title: 'Location View', icon: 'location_on' }
      ],
      sheetVisable: false,
      extendedToolBar: true
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
  },
  methods: {
    setSearchText (text) {
      this.$store.dispatch('setSearchText', text)
    }
  }
}
</script>
