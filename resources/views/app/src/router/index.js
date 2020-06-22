import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthPage from '../views/AuthPage.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
