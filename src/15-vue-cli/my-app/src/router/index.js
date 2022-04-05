import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import(/* webpackChunName: "home"*/ "../views/HomeView");
// import HomeView from "./views/HomeView";
import ContactView from "../views/ContactView";
// import CompanyView from "./views/CompanyView";
import TeamView from "../views/TeamView";
import Error404View from "../views/Error404View";
import CompanyHistory from "../views/CompanyHistory";

const routes = [
  { path: "/home", component: HomeView, name: "home" },
  { path: "/", redirect: { name: "home" } },
  {
    path: "/contato",
    component: ContactView,
    name: "contact",
    alias: "/off-contact",
    beforeEnter(to, from, next) {
      console.log("to", to);
      console.log("from", from);
      next();
    },
    meta: {
      auth: true,
    },
  },
  {
    path: "/empresa",
    component: () =>
      import(/* webpackChunName: "company"*/ "../views/CompanyView"),
    meta: {
      sidebar: true,
    },
    children: [
      {
        path: "historia",
        name: "company-history",
        component: CompanyHistory,
      },
    ],
  },
  { path: "/a-empresa", redirect: "/empresa" },
  {
    path: "/equipe/:member([a-z]+)?",
    component: TeamView,
    name: "team",
    props: (route) => ({ member: route.params.member, color: "green" }),
  },
  { path: "/:pathMatch(.*)", component: Error404View },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      // el: "#main",
      top: 0,
    };
  },
});

const isLogged = false;

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isLogged) {
    next("/home");
  } else {
    console.log("beforeEach");
    console.log("to", to);
    console.log("from", from);
    next();
  }
});

router.afterEach((to, from) => {
  console.log("afterEach");
  console.log("to", to);
  console.log("from", from);
});

export default router;
