<template>
  <v-toolbar dark fixed class="green">
    <!--v-toolbar-side-icon v-if="showMenuButton" @click.stop=""></v-toolbar-side-icon-->
    <v-toolbar-title v-if="showTitle">Ais-Tracker</v-toolbar-title>
    <v-btn icon v-show="searchButtonClicked||filterButtonClicked" @click="clearClicked">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn icon v-show="showSearchButton" @click="searchButtonClicked=true">
      <v-badge overlay right color="purple" overlap>
        <v-icon :slot="searchActivated" dark>done</v-icon>
        <v-icon>search</v-icon>
      </v-badge>
    </v-btn>

    <v-btn icon v-show="showFilterButton" @click="filterButtonClicked=true">
      <v-badge overlay right color="purple" overlap>
        <v-icon :slot="filterActivated" dark>done</v-icon>
        <v-icon>directions_boat</v-icon>
      </v-badge>
    </v-btn>
    <search-field v-show="searchButtonClicked"></search-field>
    <moving-vessel-switch v-show="filterButtonClicked"></moving-vessel-switch>
    <v-spacer></v-spacer>
    <v-btn icon v-show="showSettingsButton" @click="sheetVisable=!sheetVisable" class="mr-0">
      <v-icon>more_vert</v-icon>
    </v-btn>
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
  </v-toolbar>
</template>
<script>
  import SearchField from './SearchField'
  import MovingVesselSwitch from './MovingVesselSwitch'
  export default {
    name: 'app-toolbar',
    components: {
      SearchField,
      MovingVesselSwitch
    },
    data () {
      return {
        searchButtonClicked: false,
        filterButtonClicked: false,
        showSearchButton: true,
        showFilterButton: true,
        showMenuButton: true,
        showSettingsButton: true,
        showTitle: true,
        sheetVisable: false
      }
    },
    methods: {
      clearClicked () {
        this.searchButtonClicked = false
        this.filterButtonClicked = false
      },
      showAllButtons () {
        this.showSearchButton = true
        this.showFilterButton = true
        this.showMenuButton = true
        this.showSettingsButton = true
        this.showTitle = true
      },
      hideAllButtons () {
        this.showSearchButton = false
        this.showFilterButton = false
        this.showMenuButton = false
        this.showSettingsButton = true
        this.showTitle = false
      }
    },
    computed: {
      searchActivated: function () {
        if (this.$store.getters.searchText !== '') {
          return 'badge'
        }
        return ''
      },
      filterActivated: function () {
        if (this.$store.getters.filterMovingVessels) {
          return 'badge'
        }
        return ''
      },
      pathInMinutes: {
        get () { return this.$store.getters.pathInMinutes },
        set (minutes) {
          this.$store.dispatch('setPathInMinutes', minutes)
        }
      }
    },
    watch: {
      'searchButtonClicked': function () {
        this.searchButtonClicked ? this.hideAllButtons() : this.showAllButtons()
      },
      'filterButtonClicked': function () {
        this.filterButtonClicked ? this.hideAllButtons() : this.showAllButtons()
      }
    }
  }
</script>

