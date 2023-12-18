import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue';
import UploadPoliciesView from '@/views/UploadPoliciesView.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'landing-page-view', component: LandingPageView },
  { path: '/upload-policies', name: 'upload-policies', component: UploadPoliciesView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
