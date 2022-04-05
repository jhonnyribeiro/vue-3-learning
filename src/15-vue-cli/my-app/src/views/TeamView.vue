<template>
  <div>
    <h1>Equipe</h1>
    {{ member }}
    <br />
    Color: {{ color }}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque
      expedita ipsam nulla praesentium soluta tenetur unde vero! Ea natus quod
      ratione velit? Consequuntur ex illo minima nam nemo placeat!
    </p>
  </div>
</template>

<script>
export default {
  name: "TeamView",
  props: {
    color: {
      type: String,
      default: "",
    },
    member: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  // computed: {
  //   member() {
  //     return this.$route.params.member;
  //   },
  // },

  // created() {
  //   console.log(this.$route.params.member);
  // },

  methods: {},
};
</script>
