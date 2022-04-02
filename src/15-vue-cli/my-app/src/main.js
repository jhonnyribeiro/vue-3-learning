import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import CompanyView from './views/CompanyView';

const routes =[
    {path: '/', component: HomeView},
    {path: '/contato', component: ContactView},
    {path: '/empresa', component: CompanyView},
]

const router = createRouter({
    history: createWebHashHistory(), 
    routes,
});

createApp(App).use(router).mount("#app");
