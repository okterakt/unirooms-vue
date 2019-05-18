import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://thawing-depths-21106.herokuapp.com";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
