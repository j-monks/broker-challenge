import dataManager from '../../api/dataManager.js'

const state = {
  uploadedFile: null
};

const mutations = {
  setUploadedFile(state, file) {
    state.uploadedFile = file;
  }
};

const actions = {
  async uploadFile({ commit }, file) {
    try {
      const response = await dataManager.uploadCSVFile(file, '/policies/upload');
      commit('setUploadedFile', response);
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
};

const getters = {
  uploadedFile(state) {
    return state.uploadedFile;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
