import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "Jhon",
      last_name: "snow",
      email: "js@local.com",
    };
  },

  mutation: {
    updateName() {},
  },
});

createApp(App).use(store).use(router).mount("#app");

console.log(store.state.email);
