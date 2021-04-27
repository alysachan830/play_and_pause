<template>
  <!-- Swiper -->
  <div class="swiperNewReleases position-relative">
    <div class="swiper-wrapper" ref="swiperWrapper">
      <div
        class="swiper-slide d-block text-left"
        v-for="album in tenAlbumCover"
        :key="album.name"
      >
        <router-link to="/">
          <v-img :src="album.images[0].url" class="mb-4 hover__filter--darken">
          </v-img>
          <p class="font-s">{{ album.name }}</p>
        </router-link>
      </div>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- Add Arrows -->
    <div class="swiperNewReleases-button-next swiper-button-next">
      <v-icon x-large color="primary">mdi-chevron-right</v-icon>
    </div>
    <div class="swiperNewReleases-button-prev swiper-button-prev">
      <v-icon x-large color="primary">mdi-chevron-left</v-icon>
    </div>
  </div>
</template>
<script>
import Swiper, { Autoplay, Navigation, Pagination } from "swiper/core";
Swiper.use([Autoplay, Navigation, Pagination]);

export default {
  name: "NewReleases",
  props: {
    id: Number,
    dataFromParent: Array,
    perSlideNum: Number,
    autoPlay: Boolean,
  },
  data() {
    return {
      // data: [],
      swiper: {},
      // width: 0,
    };
  },
  computed: {
    tenAlbumCover() {
      return this.dataFromParent.slice(this.id * 10, this.id * 10 + 10);
    },
    // getSwiperWidth() {
    //   return (this.width - 30 * 2) / 3;
    // },
  },
  methods: {
    // getWidth() {
    //   console.log("run!");
    //   this.width = this.$refs.swiperWrapper.clientWidth;
    // },
  },
  mounted() {
    this.swiper = new Swiper(".swiperNewReleases", {
      observer: true,
      observeParents: true,
      // loop: true,
      slidesPerView: 1.5,
      spaceBetween: 30, //30,
      autoplay: this.autoPlay
        ? {
            delay: 2500,
            disableOnInteraction: false,
          }
        : false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        960: {
          slidesPerView: 2.5,
        },
        1264: {
          slidesPerView: this.perSlideNum,
        },
      },
    });

    // window.addEventListener("resize", this.getWidth);

    // this.width = this.$refs.swiperWrapper.clientWidth;
  },
  // destroyed() {
  //   window.removeEventListener("resize", this.getWidth);
  // },

  //   components: {},
};
</script>
<style lang="scss">
// @import "~vuetify/src/styles/settings/_light.scss";
// @import "~vuetify/src/styles/styles.sass";
// @import "~vuetify/src/styles/styles.sass";
// @import "~vuetify/src/styles/settings/_variables.scss";
@import "@/scss/variables.scss";

// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

.swiperNewReleases {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.v-application p {
  margin-bottom: 0;
}

.swiperNewReleases-button-next,
.swiperNewReleases-button-prev {
  top: calc(50% - 28px);
}
</style>
