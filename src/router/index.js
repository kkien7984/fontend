import { createRouter, createWebHistory } from 'vue-router'
import GenresView from '../views/GenresView.vue'
import PopularView from '../views/PopularView.vue'
import NewView from '../views/NewView.vue'
import HomeView from '../views/HomeView.vue'
import CommucView from '../views/HomeView.vue'
import CommucReadView from '../views/HomeView.vue'
import ErrorView from '@/components/layouts/Error.vue'
const turn_on_auth = () => {
  window.postMessage({
      active:'auth'
  }, window.location.href);
}
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    },
    {
      path: "/genres",
      name: "genres",
      component: GenresView,
    },
    {
      path: "/popular",
      name: "popular",
      component: PopularView,
    },
    {
      path: "/comic",
      name: "product_list",
      component: CommucView,
    },
    {
      path: "/comic/:slug",
      name: "product_show",
      component: CommucReadView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: ErrorView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ["/","/new","/genres","/popular","/comic"];
  console.log(to.path)
  console.log(to.path == "/" ? '/' : to.path.split('/')[1])
  const authRequired = !publicPages.includes(to.path == "/" ? '/' : "/"+to.path.split('/')[1]);
  const loggedIn = localStorage.getItem("user") || false
  if (authRequired && !loggedIn) {
    next("/")
    turn_on_auth()
  } else {
    next();
  }
});
export default router;