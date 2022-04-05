import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import CompanyView from "./views/CompanyView";
import TeamView from "./views/TeamView";
import Error404View from "./views/Error404View";

const routes = [
  { path: "/home", component: HomeView, name: "home" },
  { path: "/", redirect: { name: "home" } },
  {
    path: "/contato",
    component: ContactView,
    name: "contact",
    alias: "/off-contact",
  },
  { path: "/empresa", component: CompanyView },
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
});

createApp(App).use(router).mount("#app");
