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
  computed: {
    sidebar() {
      return this.$route.meta.sidebar;
    },
  },
  methods: {},
};
</script>
