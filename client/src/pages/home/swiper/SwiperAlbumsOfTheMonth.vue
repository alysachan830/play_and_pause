<template>
  <!-- Swiper -->
  <div class="d-flex flex-column align-center">
    <div class="swiper-container mb-4">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img v-if="data.length > 1" :src="data[0].images[0].url" alt="" />
        </div>
        <div class="swiper-slide">
          <img v-if="data.length > 1" :src="data[0].images[0].url" alt="" />
        </div>
        <div class="swiper-slide">
          <img v-if="data.length > 1" :src="data[0].images[0].url" alt="" />
        </div>
        <div class="swiper-slide">
          <img v-if="data.length > 1" :src="data[0].images[0].url" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next">
        <v-icon x-large color="primary">mdi-chevron-right</v-icon>
      </div>
      <div class="swiper-button-prev">
        <v-icon x-large color="primary">mdi-chevron-left</v-icon>
      </div>
    </div>
    <div
      v-if="data.length > 1"
      class="albumsOfTheMonth-title white--text mb-10"
    >
      {{ data[0].name }}
    </div>
    <div class="albumsOfTheMonth-btn-wrap text-right">
      <v-btn outlined color="primary" class="hidden-lg-and-up">
        shop now
      </v-btn>
    </div>
  </div>
</template>
<script>
import Swiper, { Autoplay, Navigation, Pagination } from "swiper/core";
Swiper.use([Autoplay, Navigation, Pagination]);

// import Swiper from "swiper/bundle";

// import Swiper from "swiper/bundle";
// import "../../node_modules/vuetify/src/styles/settings/_variables";
// import "../../node_modules/vuetify/src/styles/settings/_variables";
// import "../../node_modules/vuetify/src/styles/styles.sass";
// import "@/scss/variables"

// import "../../plugins/vuetify.js";
import "swiper/swiper-bundle.css";

// import { mapActions } from "vuex";

export default {
  name: "albumsOfTheMonth",
  props: {
    data: Array,
  },
  data() {
    return {
      swiper: {},
    };
  },
  methods: {
    showMeg() {
      console.log("changed!");
    },
    // ...mapActions(["toggleRefresh"]),
  },
  mounted() {
    const vm = this;
    this.swiper = new Swiper(".swiper-container", {
      observer: true,
      observeParents: true,
      // loop: true,
      // loopedSlides: 8,
      spaceBetween: 30,
      // centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplay() {
          vm.$bus.$emit("triggerAnimation");
        },
      },
      // onProgress: this.$bus.$emit("triggerAnimation"),
      // onProgress: console.log("123"),
    });
  },

  //   components: {},
};
</script>
<style lang="scss">
// @import "~vuetify/src/styles/settings/_light.scss";
// @import "~vuetify/src/styles/styles.sass";
// @import "~vuetify/src/styles/styles.sass";
// @import "~vuetify/src/styles/settings/_variables.scss";
@import "@/scss/variables.scss";

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;

  @media (min-width: 640px) {
    width: 640px;
    height: 640px;
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;

  // -webkit-justify-content: center;
  // justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: $primary;
  &-active {
    background: $primary;
  }
}

.albumsOfTheMonth-title {
  width: 100%;
  @media (min-width: 640px) {
    width: 640px;
  }
}

.albumsOfTheMonth-btn-wrap {
  width: 100%;
  @media (min-width: 640px) {
    width: 640px;
  }
}

// .swiper-pagination {
//   right: -10px;
//   top: 0;
// }

// .swiper-pagination-fraction,
// .swiper-pagination-custom,
// .swiper-container-horizontal > .swiper-pagination-bullets {
//   left: auto;
//   width: auto;
// }
</style>
