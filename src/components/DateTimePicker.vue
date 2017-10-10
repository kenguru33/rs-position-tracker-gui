<template>
  <v-layout row wrap class="date-time-picker">
      <v-btn icon style="top: 12px">
        <v-icon>history</v-icon>
      </v-btn>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field style="max-width: 130px"
          slot="activator"
          color="white"
          label="date"
          v-model="date"
          prepend-icon="event"
          readonly
          dark
          
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions>
          <template scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu2"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field style="max-width: 130px"
          slot="activator"
          dark
          color= white
          label="time"
          v-model="time"
          prepend-icon="access_time"
          readonly
          
        ></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      date: null,
      menu: false,
      modal: false,
      time: null,
      menu2: false,
      modal2: false,
      expanded: false
    })
  }
</script>

<style scoped>
  .date-time-picker {
    position: absolute;
    left: 80px
  }
</style>
