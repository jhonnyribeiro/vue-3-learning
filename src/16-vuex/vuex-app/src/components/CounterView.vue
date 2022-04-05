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
    <input :value="$store.state.counter" type="text" class="form-control" />
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
export default {
  name: "CounterView",
  data() {
    return {};
  },

  //   created() {
  //     this.$store.commit("increment");
  //   },

  methods: {
    increment() {
      this.$store.commit("increment", 10);
    },
    decrement() {
      this.$store.commit("decrement", 10);
    },
  },
};
</script>
