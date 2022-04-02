import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import CompanyView from "./views/CompanyView";

const routes = [
  { path: "/", component: HomeView },
  { path: "/contato", component: ContactView, name: "contact" },
  { path: "/empresa", component: CompanyView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
