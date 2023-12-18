import Vue from 'vue';
import Vuex from 'vuex';
import upload from './upload';
import policies from './policies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    upload,
    policies
  }
});
