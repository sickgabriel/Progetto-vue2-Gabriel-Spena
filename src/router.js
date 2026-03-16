import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './pages/Welcome.vue'
import Step from './pages/Step.vue'
import ThankYou from './pages/ThankYou.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/step/tappo', component: Step, props: { part: 'tappo' } },
  { path: '/step/corpo', component: Step, props: { part: 'corpo' } },
  { path: '/step/fondo', component: Step, props: { part: 'fondo' } },
  { path: '/thank-you', component: ThankYou },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
