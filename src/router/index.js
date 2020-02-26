import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router