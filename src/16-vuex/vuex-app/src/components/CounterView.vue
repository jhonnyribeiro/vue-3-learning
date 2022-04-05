<template>
  <div class="input-group mb-3">
    <button
      @click.stop.prevent="decrement()"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon1"
    >
      -
    </button>
    <input :value="counter" type="text" class="form-control" />
    <button
      @click.stop.prevent="increment()"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon1"
    >
      +
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CounterView",
  data() {
    return {};
  },

  //   created() {
  //     this.$store.commit("increment");
  //   },

  computed: { ...mapState({ counter: (state) => state.counter }) },

  methods: {
    // ...mapMutations(["increment", "decrement"]),
    ...mapMutations({
      $_add: "increment",
      $_remove: "decrement",
    }),
    increment() {
      this.$_add(5);
    },
    decrement() {
      this.$_remove(5);
    },
  },
};
</script>
