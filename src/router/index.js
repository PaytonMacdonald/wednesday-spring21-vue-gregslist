import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/About.vue'
import CarDetails from '../pages/CarDetailsPage.vue'
import HouseDetails from '../pages/HousesDetails.vue'
// import JobDetails from '../pages/JobsDetails.vue'
import Cars from '../pages/CarsPage.vue'
import Houses from '../pages/HousesPage.vue'
// import Jobs from '../pages/JobsPage.vue'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/Houses',
    name: 'Houses',
    component: Houses
  },
  // {
  //   path: 'Jobs',
  //   name: 'Jobs',
  //   component: Jobs
  // },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetails
  },
  // {
  //   path: '/jobs/:id',
  //   name: 'JobDetails',
  //   component: JobDetails
  // },
  {
    path: '/profile',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
