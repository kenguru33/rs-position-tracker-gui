<template>
  <div>
    <Toolbar></Toolbar>
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
import SearchField from './lib/SearchField'
import DataTimePicker from './DateTimePicker'
import Toolbar from './lib/Toolbar'
export default {
  components: {
    SearchField,
    DataTimePicker,
    Toolbar
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
  },
  methods: {
    setSearchText (text) {
      this.$store.dispatch('setSearchText', text)
    }
  }
}
</script>
<style scoped>

</style>
