import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    loading: null,
    error: null,
  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload;
    },
    addTodo: (state, payload) => {
      state.todos.unshift(payload);
    },
    removeTodo: (state, id) => {
      const index = state.todos.findIndex((todo) => todo.id == id);
      state.todos.splice(index, 1);
    },
    updateTodo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id == payload.id);
      state.todos.splice(index, 1, payload);
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
  },
  actions: {
    async handleGetTodos({ commit }) {
      commit("setLoading", true);
      try {
        const response = await HTTP.get("todos");
        commit("setTodos", response.data);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
    async handleDeleteTodo({ commit }, id) {
      commit("setLoading", true);
      try {
        await HTTP.delete(`todos/${id}`);
        commit("removeTodo", id);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
    async addTodo({ commit }, payload) {
      commit("setLoading", true);
      try {
        const response = await HTTP.post(`todos`, payload);
        console.log(response);
        commit("addTodo", response.data);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
    async updateTodo({ commit }, payload) {
      commit("setLoading", true);
      try {
        await HTTP.put(`todos/${payload.id}`);
        commit("updateTodo", payload);
        commit("setLoading", false);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },
  },
  getters: {
    todos: (state) => state.todos,
    loading: (state) => state.loading,
  },
  modules: {},
});
