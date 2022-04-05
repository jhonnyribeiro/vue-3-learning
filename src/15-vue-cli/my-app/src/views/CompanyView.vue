<template>
  <div>
    Show Sidebar: {{ sidebar }}
    <h1>A empresa</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque
      expedita ipsam nulla praesentium soluta tenetur unde vero! Ea natus quod
      ratione velit? Consequuntur ex illo minima nam nemo placeat!
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CompanyView",

  data() {
    return {};
  },

  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    console.log("to", to);
    console.log("from", from);
    next();
  },

  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    console.log("to", to);
    console.log("from", from);
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    console.log("to", to);
    console.log("from", from);
    next();
  },

  computed: {
    sidebar() {
      return this.$route.meta.sidebar;
    },
  },
  methods: {},
};
</script>
