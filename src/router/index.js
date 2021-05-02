import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/authentication/Login.vue";
import UserAccount from "../views/authentication/User-Account";
import Dashboard from "@/views/Dashboard";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: "/user-account",
    name: "UserAccount",
    component: UserAccount,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { authOnly: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("token");
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  }
  {
    next(); // make sure to always call next()!
  }
});

export default router;
