<template>
  <v-layout row>
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
        <v-text-field class="mr-1 date-time-field"
          slot="activator"
          label="date"
          v-model="date"
          prepend-icon="event"
          readonly
          solo
          
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable autosave>
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
        <v-text-field class="date-time-field"
          slot="activator"
          label="time"
          v-model="time"
          prepend-icon="access_time"
          readonly
          solo
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
  .date-time-field {
    max-width: 155px;
  }
</style>
