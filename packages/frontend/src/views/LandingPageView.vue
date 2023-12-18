<template>
  <div class="landing-page">
    <div class="centered-content">
      <h1>Welcome to my Broker Insights Challenge Submission</h1>
      <p>To get started, upload your insurance policy data via CSV by clicking the "Upload Policies" button in the header.</p>
      <p>Alternatively, if you have already uploaded a CSV file, you can view your policy data by clicking the "View Policies" button.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPageView',

  data: () => ({
    //
  }),
};
</script>

<style>
.landing-page {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 50px;
}

.centered-content {
  text-align: center;
}
</style>
