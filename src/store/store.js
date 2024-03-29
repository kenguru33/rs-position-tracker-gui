import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState({
    path: [
      'searchText',
      'filterMovingVessels',
      'pathInMinutes'
    ]
  })],
  state: {
    filterMovingVessels: false,
    vessels: [],
    searchText: '',
    selectedVessel: null,
    selectedVesselPath: [],
    pathInMinutes: 120,
    errors: [],
    movingVessels: [],
    haltedVessels: []
  },
  getters: {
    filterMovingVessels: state => {
      return state.filterMovingVessels
    },
    vessels: state => {
      return state.vessels
    },
    searchText: state => {
      return state.searchText
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
    },
    movingVessels: state => {
      return state.movingVessels
    },
    haltedVessels: state => {
      return state.haltedVessels
    }
  },
  mutations: {
    setFilterMovingVessels: (state, payload) => {
      state.filterMovingVessels = payload
    },
    fetchVessels: (state, vessels) => {
      state.vessels = vessels
    },
    setSearchText: (state, searchText) => {
      state.searchText = searchText
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
    },
    setMovingVessels: (state, vessels) => {
      state.movingVessels = vessels
    },
    setHaltedVessels: (state, vessels) => {
      state.haltedVessels = vessels
    },
    addMovingVessel: (state, vessel) => {
      console.log('add moving vessel: ', vessel.Ship_name)
      state.movingVessels.push(vessel)
    },
    removeMovingVessel: (state, vessel) => {
      console.log('remove moving vessel: ', vessel.Ship_name)
      const index = state.movingVessels.findIndex(v => { return v.MMSI === vessel.MMSI })
      state.movingVessels.splice(index, 1)
    },
    addHaltedVessel: (state, vessel) => {
      // console.log('add halted vessel: ', vessel.Ship_name)
      state.haltedVessels.push(vessel)
    },
    removeHaltedVessel: (state, vessel) => {
      // console.log('remove halted vessel: ', vessel.Ship_name)
      const index = state.haltedVessels.findIndex(v => { return v.MMSI === vessel.MMSI })
      state.haltedVessels.splice(index, 1)
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
          commit('addError', err)
        })
    },
    setSearchText: ({ commit }, searchText) => {
      commit('setSearchText', searchText)
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
    },
    setMovingVessels: ({commit}, vessels) => {
      commit('setMovingVessels', vessels)
    },
    setHaltedVessels: ({commit}, vessels) => {
      commit('setHaltedVessels', vessels)
    },
    addMovingVessel: ({commit}, vessel) => {
      commit('addMovingVessel', vessel)
    },
    removeMovingVessel: ({commit}, vessel) => {
      commit('removeMovingVessel', vessel)
    },
    addHaltedVessel: ({commit}, vessel) => {
      commit('addHaltedVessel', vessel)
    },
    removeHaltedVessel: ({commit}, vessel) => {
      commit('removeHaltedVessel', vessel)
    }
  }
})
