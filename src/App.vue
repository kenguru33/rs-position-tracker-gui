<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer temporary v-model="drawer" light overflow absolute>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="static/v.png" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Tracker Views</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="()=>{alert('koko')}">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
      <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="white--text indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>RS Ais-Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.stop="sheetVisable=!sheetVisable" class="btn--flat">
        <v-icon left>settings</v-icon>Options</v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
        <router-view :onlyMovingVessels="onlyMovingVessels"></router-view>
      </v-container>
    </main>
    <div class="text-xs-center">
    <v-bottom-sheet v-model="sheetVisable">
      <v-list>
        <v-subheader>Options</v-subheader>
        <v-list-tile>
          <v-switch label="filter moving vessels" v-model="onlyMovingVessels"></v-switch>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Live View', icon: 'gps_fixed' },
        { title: 'Historical View', icon: 'access_time' },
        { title: 'Location View', icon: 'location_on' }
      ],
      sheetVisable: false,
      onlyMovingVessels: true
    }
  }
}
</script>
