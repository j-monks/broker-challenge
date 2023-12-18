import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL
});

// Add a request interceptor to apply headers conditionally
apiClient.interceptors.request.use(
    (config) => {
      // Modify headers based on the request type
      if (config.url === '/policies/upload') {
        config.headers['Content-Type'] = 'multipart/form-data';
      } else {
        // Set default headers for other requests
        config.headers['Content-Type'] = 'application/json';
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default {
  // Generic API call
  async apiCall(method, url, data) {
    try {
      const response = await apiClient.request({
        method,
        url,
        data,
      });

      return response.data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  },
  // File upload call
  async uploadCSVFile(file, url) {
    const formData = new FormData();
    formData.append('file', file);

    return this.apiCall('POST', url, formData);
  }
};
