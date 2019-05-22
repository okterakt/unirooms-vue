import Vue from "vue";
import Vuex from "vuex";
import Api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lectures: [],
    lecturesToDisplay: [],
    loading: false,
    error: "",
    selected: "all"
  },
  getters: {
    lecturesToDisplay: state => {
      return state.displayedLectures;
    },
    selected: state => {
      return state.selected;
    }
  },
  mutations: {
    SET_LECTURES(state, lectures) {
      state.lectures = lectures;
      state.lecturesToDisplay = lectures;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_SELECTED(state, selected) {
      state.selected = selected;
      if (selected == "all") state.lecturesToDisplay = state.lectures;
      else
        state.lecturesToDisplay = state.lectures.filter(
          lect => lect.building == selected
        );
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
