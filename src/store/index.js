import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    posts: null,
  },
  mutations: {
    mtnUser(state, n) {
      state.user = n;
    },
    mtnDestroyUser(state) {
      state.user = null;
    },
    mtnPosts(state, n) {
      state.posts = n;
    },
  },
  actions: {
    setUser: ({ commit }, n) => {
      commit("mtnUser", n);
    },
    destroyUser: ({ commit }) => {
      commit("mtnDestroyUser");
    },
    setPosts: ({ commit }, n) => {
      commit("mtnPosts", n);
    },
  },
  modules: {},
});
