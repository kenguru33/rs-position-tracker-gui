import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filterMovingVessels: false,
    vessels: [],
    selectedVessel: null,
    selectedVesselPath: [],
    pathInMinutes: 120,
    errors: []
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
    },
    errors: state => {
      return state.errors.pop()
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
    },
    addError: (state, err) => {
      state.errors.push(err)
    }
  },
  actions: {
    setFilterMovingVessels: ({ commit }, payload) => {
      commit('setFilterMovingVessels', payload)
    },
    fetchVessels: function ({ commit }, url) {
      axios.get(url)
        .then(response => {
          commit('fetchVessels', response.data)
        })
        .catch(err => {
          console.log(err.message)
          commit('addError', err)
        })
    },
    selectVessel: ({ commit }, vessel) => {
      commit('selectVessel', vessel)
    },
    fetchSelectedVesselPath: ({ commit }, options) => {
      axios.get(`https://aistracker.herokuapp.com/api/get_positions/${options.mmsi}/${options.fromUTC}/${options.toUTC}`)
        .then(response => {
          commit('fetchSelectedVesselPath', response.data.map(pos => {
            return {lat: pos.Decimal_Latitude, lng: pos.Decimal_Longitude, date: pos.Time_stamp}
          }))
        })
        .catch(err => {
          commit('addError', err)
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
