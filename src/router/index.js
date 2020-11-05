import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// @ts-ignore
import Active from '../pages/ActivePokemonPage.vue'
// @ts-ignore
// import Pokedex from '../pages/Pokedex.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/active/:name',
    name: 'Active',
    component: Active
  }
  // {
  //   path: '/pokedex',
  //   name: 'Pokedex',
  //   component: Pokedex
  // }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
