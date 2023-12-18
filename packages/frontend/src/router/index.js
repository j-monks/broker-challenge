import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'landing-page-view', component: LandingPageView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
