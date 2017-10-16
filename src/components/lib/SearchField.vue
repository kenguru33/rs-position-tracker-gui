<template>
  <v-layout row class="search-field-bar">
    <v-text-field hide-details single-line prepend-icon="search" solo :append-icon="appendIcon" :appendIconCb="clearSearchText" v-model="searchText"></v-text-field>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    appendIcon () {
      if (this.searchText !== '') {
        return 'clear'
      }
      return ''
    },
    searchText: {
      get () { return this.$store.getters.searchText },
      set (value) {
        this.$store.dispatch('setSearchText', value)
      }
    }
  },
  methods: {
    clearSearchText () {
      this.$store.dispatch('setSearchText', '')
    }
  }
}
</script>

