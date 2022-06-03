import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/SamplePage1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/SamplePage2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('../views/SamplePage3.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
