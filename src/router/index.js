import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogView from '@/views/CatalogView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CatalogView
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
