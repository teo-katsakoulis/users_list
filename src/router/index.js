import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/overview',
    name: 'overview',
    component: Overview,
    props: true
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '*',
    name: 'page not found',
    component: () => import('../views/PageNotFound.vue')
  }
  
]

const router = new VueRouter({
  routes
})

router.replace({ path: '/overview' })
export default router
