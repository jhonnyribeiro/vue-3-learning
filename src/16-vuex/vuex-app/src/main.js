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
      counter: 0,
    };
  },

  mutations: {
    increment(state, value) {
      state.counter += value;
    },
    decrement(state, value) {
      state.counter -= value;
    },
  },
});

createApp(App).use(store).use(router).mount("#app");

console.log(store.state.email);
