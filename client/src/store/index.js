import Vue from "vue";
import Vuex from "vuex";
import progressBar from "./modules/progressBar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    progressBar,
  },
});
