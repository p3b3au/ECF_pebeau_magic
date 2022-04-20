import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  
  {
    path: '/collection',
    name: 'collection',
    component: () => import('@/views/CollectionView.vue')
  },
  {
    path: '/details/:cardId',
    name: 'details',
    component: () => import('@/views/DetailsView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router