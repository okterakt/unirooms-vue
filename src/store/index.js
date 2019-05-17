import Vue from "vue";
import Vuex from "vuex";
import Api from "./api";

Vue.use(Vuex);

// const state = {
//   lectures: []
// };

export default new Vuex.Store({
  state: {
    lectures: []
  },
  mutations: {
    setLectures(state, lectures) {
      state.lectures = lectures;
    }
  },
  actions: {
    async getAllLectures({ commit }) {
      commit("setLectures", await Api.getAllLectures());
    }
  }
});
