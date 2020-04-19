import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FavList from '../views/FavList.vue'
import TeamSelected from '../views/TeamSelected.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/fav',
    name: 'FavList',
    component: FavList,
    props: true
  },
  {
    path: '/team/:id',
    name: 'TeamSelected',
    component: TeamSelected,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
