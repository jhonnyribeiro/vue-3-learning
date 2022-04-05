<template>
  <div class="input-group mb-3">
    <button
      @click.stop.prevent="decrement(10)"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon1"
    >
      -
    </button>
    <input :value="counter" type="text" class="form-control" />
    <button
      @click.stop.prevent="increment(10)"
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
    ...mapMutations(["increment", "decrement"]),
    // increment() {
    //   this.$store.commit("increment", 10);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 10);
    // },
  },
};
</script>
