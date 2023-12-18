import dataManager from '../../api/dataManager.js'

const state = {
  uploadedFile: null,
  uploadStatus: null
};

const mutations = {
  setUploadedFile(state, file) {
    state.uploadedFile = file;
  },
  setUploadStatus(state, status) {
    state.uploadStatus = status;
  }
};

const actions = {
  async uploadFile({ commit }, file) {
    try {
      const response = await dataManager.uploadCSVFile(file, '/policies/upload');
      commit('setUploadedFile', response);
      commit('setUploadStatus', 'success');
    } catch (error) {
      commit('setUploadStatus', 'error');
      console.error('Error uploading file:', error);
      throw error;
    }
  }
};

const getters = {
  uploadFile(state) {
    return state.uploadedFile;
  },
  uploadStatus(state) {
    return state.uploadStatus;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
