<template>
  <v-layout row class="search-field-bar">
    <v-btn icon @click="expanded=!expanded">
      <v-icon>{{expandIcon}}</v-icon>
    </v-btn>
    <v-text-field v-if="expanded" hide-details single-line prepend-icon="search" :append-icon="appendIcon" :appendIconCb="clearSearchText" @focus="focus=true" @blur="focus=false" v-model="searchText"></v-text-field>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      focus: false,
      searchText: '',
      expanded: false
    }
  },
  computed: {
    appendIcon () {
      if (this.searchText !== '') {
        return 'clear'
      }
      return ''
    },
    expandIcon () {
      if (this.expanded) {
        return 'arrow_back'
      } else {
        return 'search'
      }
    }
  },
  methods: {
    clearSearchText () {
      this.searchText = ''
    }
  },
  watch: {
    'searchText': function () {
      this.$emit('searchTextChanged', this.searchText)
    }
  }
}
</script>
<style scoped>
  .search-field-bar {
    max-width: 290px;
  }
</style>