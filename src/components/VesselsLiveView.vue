<template>
  <v-card id="create">
    <v-container fluid grid-list-md>
      <v-layout child-flex wrap>
        <v-flex d-flex xs12 sm12 md6>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card>

              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6>
          <v-card>
            <v-flex d-flex xs12>
              <sea-map></sea-map>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        class="blue darken-2"
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<script>
  import SeaMap from './SeaMap.vue'

  export default {
    components: {SeaMap},
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }),

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    },

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    }
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }
</style>
