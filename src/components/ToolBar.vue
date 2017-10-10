<template>
<v-layout class="tool-bar" row>
  <v-btn icon v-show="searchButtonClicked||historyButtonClicked||filterButtonClicked" @click="clearClicked">
    <v-icon>arrow_back</v-icon>
  </v-btn>
  <v-btn icon v-show="showSearchButton" @click="searchButtonClicked=true">
    <v-icon>search</v-icon>
  </v-btn>
  <v-btn icon v-show="showHistoryButton" @click="historyButtonClicked=true">
    <v-icon>history</v-icon>
  </v-btn>
  <v-btn icon v-show="showFilterButton" @click="filterButtonClicked=true">
    <v-icon>filter_list</v-icon>
  </v-btn>
  <search-field v-show="searchButtonClicked"></search-field>
  <date-time-picker v-show="historyButtonClicked"></date-time-picker>
  <moving-vessel-switch v-show="filterButtonClicked"></moving-vessel-switch>
</v-layout>
</template>
<script>
import SearchField from './SearchField'
import DateTimePicker from './DateTimePicker'
import MovingVesselSwitch from './MovingVesselSwitch'
export default {
  components: {
    SearchField,
    DateTimePicker,
    MovingVesselSwitch
  },
  data () {
    return {
      searchButtonClicked: false,
      historyButtonClicked: false,
      filterButtonClicked: false,
      showBackButtonClicked: false,
      showSearchButton: true,
      showHistoryButton: true,
      showFilterButton: true
    }
  },
  methods: {
    clearClicked () {
      this.searchButtonClicked = false
      this.historyButtonClicked = false
      this.filterButtonClicked = false
      this.backButtonClicked = false
    },
    showAllButtons () {
      this.showSearchButton = true
      this.showHistoryButton = true
      this.showFilterButton = true
      this.showBackButton = false
    },
    hideAllButtons () {
      this.showSearchButton = false
      this.showHistoryButton = false
      this.showFilterButton = false
      this.showBackButton = true
    }
  },
  watch: {
    'searchButtonClicked': function () {
      this.searchButtonClicked ? this.hideAllButtons() : this.showAllButtons()
    },
    'historyButtonClicked': function () {
      this.historyButtonClicked ? this.hideAllButtons() : this.showAllButtons()
    },
    'filterButtonClicked': function () {
      this.filterButtonClicked ? this.hideAllButtons() : this.showAllButtons()
    }
  }
}
</script>
<style scoped>
  
</style>