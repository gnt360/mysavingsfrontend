import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/authentication/Login.vue";
import UserAccount from "../views/authentication/User-Account";
import Dashboard from "@/views/Dashboard";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
