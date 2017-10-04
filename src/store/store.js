import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filterMovingVessels: false,
    vessels: [],
    selectedVessel: null,
    selectedVesselPath: [],
    pathInMinutes: 120
  },
  getters: {
    filterMovingVessels: state => {
      return state.filterMovingVessels
    },
    vessels: state => {
      return state.vessels
    },
    selectedVessel: state => {
      return state.selectedVessel
    },
    selectedVesselPath: state => {
      return state.selectedVesselPath
    },
    pathInMinutes: state => {
      return state.pathInMinutes
    }
  },
  mutations: {
    setFilterMovingVessels: (state, payload) => {
      state.filterMovingVessels = payload
    },
    fetchVessels: (state, vessels) => {
      state.vessels = vessels
    },
    selectVessel: (state, selectedVessel) => {
      state.selectedVessel = selectedVessel
    },
    fetchSelectedVesselPath: (state, selectedVesselPath) => {
      state.selectedVesselPath = selectedVesselPath
    },
    setPathInMinutes: (state, minutes) => {
      state.pathInMinutes = minutes
    },
    addToPath: (state, position) => {
      state.selectedVesselPath.push(position)
    }
  },
  actions: {
    setFilterMovingVessels: ({ commit }, payload) => {
      commit('setFilterMovingVessels', payload)
    },
    fetchVessels: function ({ commit }, url) {
      console.log('fetchVessels')
      Vue.http.get(url)
        .then(vessels => {
          commit('fetchVessels', vessels.data)
        })
    },
    selectVessel: ({ commit }, vessel) => {
      commit('selectVessel', vessel)
    },
    fetchSelectedVesselPath: ({ commit }, options) => {
      console.log('fetchSelectedVesselPath', options.mmsi)
      Vue.http.get(`https://aistracker.herokuapp.com/api/get_positions/${options.mmsi}/${options.fromUTC}/${options.toUTC}`)
        .then(vesselData => {
          commit('fetchSelectedVesselPath', vesselData.data.map(pos => {
            return {lat: pos.Decimal_Latitude, lng: pos.Decimal_Longitude, date: pos.Time_stamp}
          }))
        })
    },
    setPathInMinutes: ({ commit }, minutes) => {
      commit('setPathInMinutes', minutes)
    },
    addToPath: ({ commit }, position) => {
      commit('addToPath', position)
    }
  }
})
