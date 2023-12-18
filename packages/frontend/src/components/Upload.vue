<template>
    <v-container>
      <h2 class="mb-2">UPLOAD INSURANCE POLICY DATA</h2>
      <v-file-input
        label="Upload CSV file"
        v-model="file"
        accept=".csv"
        @change="handleFileUpload"
      ></v-file-input>
      <v-btn @click="handleUploadFile" :disabled="!file">Upload</v-btn>
      <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
      <v-alert v-if="successMessage" type="success">{{ successMessage }}</v-alert>
    </v-container>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'UploadFile',
    data() {
      return {
        file: null,
        errorMessage: '',
        successMessage: ''
      };
    },
    computed: {
      ...mapGetters('upload', ['uploadedFile']),
    },
    methods: {
      ...mapActions('upload', ['uploadFile']),
      handleFileUpload() {
        // Reset messages
        this.errorMessage = '';
        this.successMessage = '';
  
        // Check file type
        if (this.file && this.file.type !== 'text/csv') {
          this.errorMessage = 'Please select a CSV file.';
          this.file = null;
        }
      },
      async handleUploadFile() {
        if (!this.file) {
          this.errorMessage = 'Please select a CSV file.';
          return;
        }
  
        try {
          // Call store to upload the file
          await this.uploadFile(this.file);
  
          // Reset file and display success message
          this.file = null;
          this.successMessage = 'CSV Successfully Uploaded.';
        } catch (error) {
          console.error('Error uploading file:', error);
          this.errorMessage = 'Error uploading file. Please try again.';
        }
      }
    }
  };
  </script>
  