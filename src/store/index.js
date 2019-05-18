import Vue from "vue";
import Vuex from "vuex";
import Api from "./api";

Vue.use(Vuex);

// const state = {
//   lectures: []
// };

export default new Vuex.Store({
  state: {
    lectures: [],
    loading: false,
    error: ""
  },
  mutations: {
    SET_LECTURES(state, lectures) {
      state.lectures = lectures;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    getAllLectures({ commit }) {
      commit("SET_LOADING", true);
      Api.loadAllLectures()
        .then(data => {
          commit("SET_LOADING", false);
          commit("SET_LECTURES", data);
        })
        .catch(error => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", error);
        });
    }
  }
});
