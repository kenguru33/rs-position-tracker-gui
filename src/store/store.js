import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filterMovingVessels: false,
    vessels: [],
    selectedVessel: null
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
    }
  },
  actions: {
    setFilterMovingVessels: ({ commit }, payload) => {
      commit('setFilterMovingVessels', payload)
    },
    fetchVessels: function ({ commit }, url) {
      Vue.http.get(url)
        .then(vessels => {
          commit('fetchVessels', vessels.data)
        })
    },
    selectVessel: ({ commit }, vessel) => {
      commit('selectVessel', vessel)
    }
  }
})
