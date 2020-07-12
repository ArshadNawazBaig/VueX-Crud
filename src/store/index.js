import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: [],
    loading: null,
    error: null
  },
  mutations: {
    setCurrentUser: (state, payload) => {
      state.currentUser = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    removeUser: (state, payload) => {
      state.currentUser = payload;
    },
  },
  actions: {
    getCurrentUser ({commit}, payload) {
      commit('setLoading', true);
      if(!localStorage.currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(payload))
        commit('setCurrentUser', JSON.parse(localStorage.currentUser))
        commit('setLoading', false);
      } else {
        commit('setCurrentUser', JSON.parse(localStorage.currentUser))
        commit('setLoading', false);
      }
    },
    async logout({commit}) {
      commit('setLoading', true);
      if (localStorage.currentUser) {
        localStorage.setItem('currentUser', '')
        commit('removeUser', [])
      }
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    loading: state => state.loading,
  },
  modules: {
  }
})
