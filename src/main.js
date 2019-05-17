import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://10.7.145.120:9900/";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
