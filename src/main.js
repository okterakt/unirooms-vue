import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://xxx.herokuapp.com";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
