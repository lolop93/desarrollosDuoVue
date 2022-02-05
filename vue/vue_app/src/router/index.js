import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/equipo',
    name: 'Team',
    component: Team
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Services
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
