import dataManager from '../../api/dataManager.js';

const state = {
  policies: [],
};

const mutations = {
  setPolicies(state, policies) {
    state.policies = policies;
  }
};

const actions = {
  async fetchPolicies({ commit }) {
    try {
      const response = await dataManager.apiCall('get', '/policies/all');
      commit('setPolicies', response);
    } catch (error) {
      console.error('Error fetching policies:', error);
      throw error;
    }
  }
};

const getters = {
   policies(state) {
     return state.policies;
   }
 };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
