import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    loading: null,
    error: null
  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
  },
  actions: {
    async handleGetTodos({commit}) {
      commit('setLoading', true);
      try {
        const response = await HTTP.get('todos');
        commit('setTodos', response.data);
        commit('setLoading', false);
      } catch (err) {
        commit('setError', err);
        commit('setLoading', false);
      }
    }
  },
  getters: {
    todos: state => state.todos,
    loading: state => state.loading,
  },
  modules: {
  }
})
