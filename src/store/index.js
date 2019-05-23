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
    selected: "main",
    navStack: ["main"]
  },
  getters: {
    lecturesToDisplay: state => {
      return state.displayedLectures;
    },
    selected: state => {
      return state.navStack[state.navStack.length - 1];
    },
    navStack: state => {
      return state.navStack.map(e => ({ text: e, disabled: false, href: "" }));
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
      if (selected == "main") state.lecturesToDisplay = state.lectures;
      else
        state.lecturesToDisplay = state.lectures.filter(
          lect => lect.building == selected[0]
        );
    },
    PUSH_TO_NAV_STACK(state, selected) {
      state.navStack.push(selected);
    },
    SLICE_NAV_STACK(state, endIndex) {
      state.navStack = state.navStack.slice(0, endIndex);
    },
    UPDATE_NAV_STACK_TOP(state, floor) {
      var len = state.navStack.length;
      var top = state.navStack[len - 1];
      Vue.set(state.navStack, len - 1, top[0] + floor);
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
