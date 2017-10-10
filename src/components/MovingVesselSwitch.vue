<template>
  <v-layout row>
  <v-switch class="switch" color="white" dark label="Moving Vessels" v-model="filterMovingVessels"></v-switch>
  </v-layout>
</template>
<script>
export default {
  computed: {
    filterMovingVessels: {
      get () { return this.$store.getters.filterMovingVessels },
      set (value) {
        this.$store.dispatch('setFilterMovingVessels', !this.filterMovingVessels)
      }
    }
  }
}
</script>
<style scoped>
  .switch {
    top: 9px;
    height: 0;
  }
</style>