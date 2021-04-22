<template>
  <v-fab-transition>
    <v-btn
      class="toTopBtn"
      max-width="36"
      min-width="0"
      v-scroll="onScroll"
      v-show="fab"
      dark
      fixed
      bottom
      right
      color="dark-info"
      @click="toTop"
    >
      <v-icon color="primary">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "ToTopBtn",
  data() {
    return {
      fab: false,
    };
  },
  computed: {
    isScrolling() {
      return document.documentElement.scrollTop > 20;
    },
  },
  methods: {
    onScroll(e) {
      // if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
<style lang="scss">
@import "@/scss/helpers/zindex";
.toTopBtn {
  z-index: get-z-index($elements, toTopBtn) !important;
}
</style>
