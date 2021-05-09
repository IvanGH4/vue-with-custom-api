import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    mtnUser(state, n) {
      state.user = n;
    },
    mtnDestroyUser(state) {
      state.user = null;
    },
  },
  actions: {
    setUser: ({ commit }, n) => {
      commit("mtnUser", n);
    },
    destroyUser: ({ commit }) => {
      commit("mtnDestroyUser");
    },
  },
  modules: {},
});
