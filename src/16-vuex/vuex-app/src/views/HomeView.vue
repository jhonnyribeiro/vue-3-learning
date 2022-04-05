<template>
  <div class="container mt-10">
    <CounterView />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterView from "@/components/CounterView.vue";

export default {
  name: "HomeView",
  components: {
    CounterView,
  },
};
</script>
