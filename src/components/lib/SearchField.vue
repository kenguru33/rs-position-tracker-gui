<template>
  <v-layout row class="search-field-bar">
    <v-text-field hide-details single-line prepend-icon="search" solo :append-icon="appendIcon" :appendIconCb="clearSearchText" @focus="focus=true" @blur="focus=false" v-model="searchText"></v-text-field>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      focus: false,
      searchText: ''
    }
  },
  computed: {
    appendIcon () {
      if (this.searchText !== '') {
        return 'clear'
      }
      return ''
    }
  },
  methods: {
    clearSearchText () {
      this.searchText = ''
    }
  },
  watch: {
    'searchText': function () {
      this.$store.commit('setSearchText', this.searchText)
    }
  }
}
</script>
<style scoped>

</style>
