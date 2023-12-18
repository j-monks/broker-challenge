<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="#F19721">
      <router-link to="/">
        <v-img
          class="mr-2"
          src="https://cdn-knepb.nitrocdn.com/KVGQfzJAbiZbbyecyJahDkfKRfRdusoe/assets/images/optimized/rev-c366493/brokerinsights.com/wp-content/themes/brokersv2/assets/img/Broker-Insights-logo.gif"
          max-height="150"
          max-width="150"
          contain
        ></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/upload-policies">
        <v-btn plain>
          <v-icon>mdi-cloud-upload</v-icon>
          Upload Policies
        </v-btn>
      </router-link>
      <router-link to="/view-policies">
        <v-btn plain>
          <v-icon>mdi-file-document</v-icon>
          View Policies
        </v-btn>
      </router-link>
    </v-app-bar>

    <!-- Content Area -->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
