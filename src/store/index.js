import Vue from "vue";
import Vuex from "vuex";
import Api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allLectures: [],
    lecturesToDisplay: [],
    loading: false,
    error: "",
    navStack: ["main"]
  },
  getters: {
    occupiedRooms: state => {
      // 3600 * 2 * 1000 = 7200000 adds 2 hours to account for the timezone GMT +2
      var nowts = Date.now() + 7200000;
      return state.lecturesToDisplay
        .filter(
          lect =>
            lect["start-timestamp"] * 1000 <= nowts &&
            nowts <= lect["end-timestamp"] * 1000
        )
        .map(lect => lect.building + lect.floor + lect.room);
    },
    lecturesToDisplay: state => {
      return state.displayedLectures;
    },
    selected: state => {
      return state.navStack[state.navStack.length - 1];
    },
    navStack: state => {
      return state.navStack.map(e => changeMain(e));
    }
  },
  mutations: {
    SET_LECTURES(state, lectures) {
      state.allLectures = lectures;
      state.lecturesToDisplay = lectures;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    PUSH_TO_NAV_STACK(state, selected) {
      state.navStack.push(selected);
      updateLecturesToDisplay(state);
    },
    SLICE_NAV_STACK(state, endIndex) {
      state.navStack = state.navStack.slice(0, endIndex);
      updateLecturesToDisplay(state);
    },
    UPDATE_NAV_STACK_TOP(state, floor) {
      var len = state.navStack.length;
      var top = state.navStack[len - 1];
      if (top === "main") return;
      Vue.set(state.navStack, len - 1, top[0] + floor);
      updateLecturesToDisplay(state);
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

function updateLecturesToDisplay(state) {
  var len = state.navStack.length;
  var top = state.navStack[len - 1];
  if (top == "main") state.lecturesToDisplay = state.allLectures;
  else
    state.lecturesToDisplay = state.allLectures.filter(
      lect => lect.building == top[0] && lect.floor == top[1]
    );
}

function changeMain(e) {
  if (e == "main") return "University";
  return e;
}
