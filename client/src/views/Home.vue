<template>
  <div>
    <Navbar></Navbar>
    <div class="bg-img-wrap mb-27 mb-lg-29">
      <v-row>
        <!-- <div
          style="
            background: url(/images/antoine-julien-BpXFYaQP894-unsplash.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            height: calc(100vh + 64px);
            width: 100%;
          "
        > -->
        <!-- <div class="title-wrap d-flex justify-center flex-column">
          <h2 class="banner-title">PLAY &</h2>
          <h2 class="banner-title text-right">PAUSE</h2>
        </div> -->
        <!-- <v-container class="d-flex justify-center" style="position: relative">
          <h2 class="banner-title">play & pause</h2>
        </v-container> -->
        <!-- </div> -->

        <v-col
          cols="12"
          lg="6"
          class="bg-img-1 d-block d-lg-flex justify-lg-center align-lg-center align-xl-start"
        >
          <div class="pt-xl-29 position-relative hidden-md-and-down">
            <h2 class="banner-title">
              play &
              <!-- <span class="banner-title hidden-lg-and-up"> pause </span> -->
            </h2>
            <a
              href="#"
              class="banner-title-link banner-title-link--hover d-flex position-absolute"
            >
              <p class="text-uppercase primary--text font-xl">shop now</p>
              <v-icon class="primary--text font-2xl">mdi-chevron-right</v-icon>
            </a>
          </div>

          <div
            class="d-lg-none position-relative d-flex align-center justify-center h-100"
          >
            <!-- <div class="position-relative">
              <h2 class="banner-title">play <br />& <br />pause</h2>
              <a href="#" class="banner-title-link d-flex position-absolute">
                <p class="text-uppercase primary--text font-m">shop now</p>
                <v-icon class="primary--text font-xl">mdi-chevron-right</v-icon>
              </a>
            </div> -->
            <div>
              <h2 class="banner-title">play & pause</h2>
              <a
                href="#"
                class="banner-title-link banner-title-link--hover d-flex ml-3 ml-lg-0"
              >
                <p class="text-uppercase primary--text font-xl">shop now</p>
                <v-icon class="primary--text font-2xl"
                  >mdi-chevron-right</v-icon
                >
              </a>
            </div>
          </div>

          <!-- <h2 class="banner-title hidden-lg-and-up">pause</h2> -->
        </v-col>
        <v-col
          cols="6"
          class="bg-img-2 d-lg-flex hidden-md-and-down flex-column justify-xl-end justify-center align-center"
        >
          <h2 class="banner-title pb-xl-29">pause</h2>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <div class="mb-27 mb-lg-29 position-relative">
        <v-row
          class="mb-10 mb-lg-0 flex-lg-row flex-column flex-column-reverse"
        >
          <v-col cols="12" lg="8">
            <SwiperAlbumsOfTheMonth :data="data"></SwiperAlbumsOfTheMonth>
          </v-col>
          <v-col cols="12" lg="4">
            <div
              class="h-100 d-flex flex-column flex-column-reverse flex-lg-column"
            >
              <!-- justify-space-between flex-row flex-row-reverse flex-lg-column align-start -->
              <!-- flex-column flex-column-reverse flex-lg-column -->
              <ProgressBar class="progress-bar mt-2 mb-lg-16"></ProgressBar>
              <div class="d-flex d-lg-block">
                <h3 class="mb-8">albums of the month</h3>
                <v-btn outlined color="primary" class="hidden-md-and-down">
                  shop now
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- <div class="text-center hidden-lg-and-up">
          <v-btn outlined color="primary"> shop now </v-btn>
        </div> -->

        <!-- <div class="text-right">
        </div> -->
        <!-- <ProgressBar class="progress-bar position-absolute"></ProgressBar> -->
      </div>
      <v-row class="mb-27 mb-lg-29 flex-column flex-column-reverse flex-lg-row">
        <v-col cols="12" lg="4">
          <h3 class="mb-8">70% off</h3>
          <p class="font-l font-md-xl mb-8">
            70% off for all albums with coupon code (only avaliable for online
            shopping)
          </p>
          <div class="text-lg-left text-right">
            <v-btn outlined color="primary"> shop now </v-btn>
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <img
            class="news-pic"
            src="/images/antoine-julien-BpXFYaQP894-unsplash.jpg"
            alt=""
          />
        </v-col>
      </v-row>
      <div class="mb-27 mb-lg-29">
        <h3 class="mb-8">new releases</h3>
        <NewReleases :data="data" class="mb-18"></NewReleases>
        <div class="text-center">
          <v-btn outlined x-large color="primary">shop now</v-btn>
        </div>
      </div>
      <div class="mb-27 mb-lg-29">
        <h3 class="mb-8">bestsellers</h3>
        <BestSellers :data="data" class="mb-18"></BestSellers>
        <div class="text-center">
          <v-btn outlined x-large color="primary">shop now</v-btn>
        </div>
      </div>
      <div class="mb-27 mb-lg-29">
        <h3 class="mb-8">explore more</h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <a href="#" class="d-block position-relative">
                <h4 class="explore-more-title font-6xl position-absolute">
                  r&b
                </h4>
                <v-img
                  :class="{ 'explore-more-img--hover': hover }"
                  class="explore-more-img explore-more-img--bnw"
                  src="images/compressed_connor-botts-k6rQYHBIAfs-unsplash.jpg"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <a href="#" class="d-block position-relative">
                <h4 class="explore-more-title font-6xl position-absolute">
                  hip-hop
                </h4>
                <v-img
                  :class="{ 'explore-more-img--hover': hover }"
                  class="explore-more-img explore-more-img--bnw"
                  src="images/olivia-anne-snyder-oKFugeLMthA-unsplash.jpg"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <a href="#" class="d-block position-relative">
                <h4 class="explore-more-title font-6xl position-absolute">
                  rock
                </h4>
                <v-img
                  :class="{ 'explore-more-img--hover': hover }"
                  class="explore-more-img explore-more-img--bnw"
                  src="images/hector-bermudez-iIWDt0fXa84-unsplash.jpg"
                ></v-img>
              </a>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <a href="#" class="d-block position-relative">
                <h4
                  class="explore-more-title font-6xl position-absolute text-nowrap"
                >
                  dance / electronic
                </h4>
                <v-img
                  :class="{ 'explore-more-img--hover': hover }"
                  class="explore-more-img explore-more-img--bnw"
                  src="images/compressed_maximalfocus-_WaZBtx-eUI-unsplash.jpg"
                >
                </v-img>
              </a>
            </v-hover>
          </v-col>
        </v-row>
      </div>
      <div class="mb-27 mb-lg-29">
        <h3 class="mb-14">our services</h3>
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-icon class="material-icons font-9xl mb-7" color="primary">
              mdi-album
            </v-icon>
            <h4 class="font-4xl font-lg-6xl mb-7">vinyl & cd</h4>
            <p class="primary--text font-m font-lg-l">
              From pop to experimental music, we lookout and share the most
              innovative music.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon class="material-icons font-9xl mb-7" color="primary">
              mdi-format-list-bulleted
            </v-icon>
            <h4 class="font-4xl font-lg-6xl mb-7">pre-order</h4>
            <p class="primary--text font-m font-lg-l">
              Pre-order selected items through email or inbox at anytime.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon class="material-icons font-9xl mb-7" color="primary">
              mdi-ferry
            </v-icon>
            <h4 class="font-4xl font-lg-6xl mb-7">Oversea order</h4>
            <p class="primary--text font-m font-lg-l">
              Free shipping for international orders over USD100
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="mb-27 mb-lg-29">
        <h3 class="mb-8">faq</h3>
        <v-row justify="center">
          <v-expansion-panels accordion class="faq">
            <v-expansion-panel class="py-4 py-lg-8">
              <v-expansion-panel-header
                hide-actions
                disable-icon-rotate
                class="font-xl font-md-3xl"
                v-slot:default="{ open }"
                >What are your opening hours?
                <template>
                  <v-icon v-if="!open" class="justify-end" color="primary"
                    >mdi-plus</v-icon
                  >
                  <v-icon v-if="open" class="justify-end" color="primary"
                    >mdi-minus</v-icon
                  >
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="font-m font-lg-l">
                The opening hours of our stores are normally 11:00 – 20:00.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="py-4 py-lg-8">
              <v-expansion-panel-header
                hide-actions
                disable-icon-rotate
                class="font-xl font-md-3xl"
                v-slot:default="{ open }"
                >What payment methods can I use?
                <template>
                  <v-icon v-if="!open" class="justify-end" color="primary"
                    >mdi-plus</v-icon
                  >
                  <v-icon v-if="open" class="justify-end" color="primary"
                    >mdi-minus</v-icon
                  >
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="font-m font-lg-l">
                Paypal, Visa, Apply Pay, Alipay, WeChat Pay.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="py-4 py-lg-8">
              <v-expansion-panel-header
                hide-actions
                disable-icon-rotate
                class="font-xl font-md-3xl"
                v-slot:default="{ open }"
                >How can I track my order?
                <template>
                  <v-icon v-if="!open" class="justify-end" color="primary"
                    >mdi-plus</v-icon
                  >
                  <v-icon v-if="open" class="justify-end" color="primary"
                    >mdi-minus</v-icon
                  >
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="font-m font-lg-l">
                A shipment confirmation email with your tracking details will be
                sent to you by email. After receiving the receipt for 24 hours,
                you could contact us at enquiry@playandpause.com if you need
                more details of your tracking information.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="py-4 py-lg-8">
              <v-expansion-panel-header
                hide-actions
                disable-icon-rotate
                class="font-xl font-md-3xl"
                v-slot:default="{ open }"
                >Can I cancel / change my order?
                <template>
                  <v-icon v-if="!open" class="justify-end" color="primary"
                    >mdi-plus</v-icon
                  >
                  <v-icon v-if="open" class="justify-end" color="primary"
                    >mdi-minus</v-icon
                  >
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="font-m font-lg-l">
                Please contact us immediately at enquiry@playandpause.com for
                changing your order.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </v-container>
    <div class="position-relative">
      <div class="newsletter-bg"></div>
      <div
        class="newsletter-content position-absolute pa-10 pa-md-18 pa-lg-24 d-flex align-center justify-center"
      >
        <div>
          <h3 class="mb-10 mb-lg-20">Sign up for newsletter</h3>
          <v-text-field placeholder="EMAIL">
            <v-icon slot="append"> mdi-chevron-right </v-icon>
          </v-text-field>
          <v-checkbox>
            <template v-slot:label>
              <div>
                I've read and accpet the
                <v-dialog width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <a href="#" v-bind="attrs" v-on="on" @click.prevent
                      >terms & conditions</a
                    >
                    <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                      Click Me
                    </v-btn> -->
                  </template>

                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-title class="headline">
                        Privacy Policy
                      </v-card-title>
                      <v-card-text>
                        <p class="font-l mb-3">Terms & Conditions</p>
                        <p class="m mb-2">General Terms</p>
                        By accessing and placing an order with , you confirm
                        that you are in agreement with and bound by the terms of
                        service contained in the Terms & Conditions outlined
                        below. These terms apply to the entire website and any
                        email or other type of communication between you and .
                        Under no circumstances shall team be liable for any
                        direct, indirect, special, incidental or consequential
                        damages, including, but not limited to, loss of data or
                        profit, arising out of the use, or the inability to use,
                        the materials on this site, even if team or an
                        authorized representative has been advised of the
                        possibility of such damages. If your use of materials
                        from this site results in the need for servicing, repair
                        or correction of equipment or data, you assume any costs
                        thereof. will not be responsible for any outcome that
                        may occur during the course of usage of our resources.
                        We reserve the rights to change prices and revise the
                        resources usage policy in any moment, License Play Pause
                        grants you a revocable, non-exclusive, non-
                        transferable, limited license to download, install and
                        use our service strictly in accordance with the terms of
                        this Agreement. These Terms & Conditions are a contract
                        between you and Play Pause (referred to in these Terms &
                        Conditions as "Play Pause", "us", "we" or "our"), the
                        provider of the Play Pause website and the services
                        accessible from the Play Pause website (which are
                        collectively referred to in these Terms & Conditions as
                        the "Play Pause Service"). You are agreeing to be bound
                        by these Terms & Conditions. If you do not agree to
                        these Terms & Conditions, please do not use the Service.
                        In these Terms & Conditions, "you" refers both to you as
                        an individual and to the entity you represent. If you
                        violate any of these Terms & Conditions, we reserve the
                        right to cancel your account or block access to your
                        account without notice.
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </template>
          </v-checkbox>
        </div>
      </div>
    </div>
    <Footer :parent="this.$options.name"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "../components/Navbar";
// import axios from "axios";
import Navbar from "@/components/header/Navbar";
import SwiperAlbumsOfTheMonth from "@/pages/home/swiper/SwiperAlbumsOfTheMonth";
import ProgressBar from "@/pages/home/ProgressBar";
import NewReleases from "@/pages/home/NewReleases";
import BestSellers from "@/pages/home/BestSellers";
import Footer from "@/components/footer/Footer";
// import Swiper from "../components/Swiper";
// import SwiperVue from "../components/Swiper_vuetify";
// http://127.0.0.1:8080/test.json

export default {
  name: "Home",
  components: {
    Navbar,
    SwiperAlbumsOfTheMonth,
    ProgressBar,
    NewReleases,
    BestSellers,
    Footer,
  },
  data() {
    return {
      data: [],
      dialog: false,
    };
  },
  mounted() {
    this.axios.get(`http://127.0.0.1:8080/test.json`).then(res => {
      this.data = res.data.albums.items;
    });
  },
};
</script>

<style lang="scss">
@import "../scss/helpers/zindex.scss";
.banner-title {
  font-size: 242px;

  @include media-breakpoint-up(sm) {
    font-size: 294px;
  }

  // @include media-breakpoint-up(md) {
  //   font-size: 408px;
  // }

  @include media-breakpoint-up(lg) {
    font-size: 338px;
    white-space: nowrap;
  }

  @include media-breakpoint-up(xl) {
    font-size: 464px;
  }
}

.banner-title-link {
  // @include media-breakpoint-up(md) {
  //   bottom: 0;
  // }

  @include media-breakpoint-up(lg) {
    bottom: 0;
    left: 12px;
    position: absolute;
  }

  &--hover {
    transition: transform 0.3s ease-out;
    &:hover {
      .v-icon {
        -webkit-transform: translateX(4px);
        -moz-transform: translateX(4px);
        -ms-transform: translateX(4px);
        -o-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
}

.bg-img-wrap {
  // height: 100vh;
  // background: url("/images/antoine-julien-BpXFYaQP894-unsplash.jpg")
  //   center/cover no-repeat;
  // height: calc(100vh + 64px);
  // height: 500px;
  // max-width: 100%;
  position: relative;
  // position: absolute;
}
.bg-img-1 {
  // max-width: 100%;
  background: url("/images/kobu-agency-3hWg9QKl5k8-unsplash.jpg") center/cover
    no-repeat;
  // height: 100%;
  // height: calc(100vh + 64px);
  height: calc(100vh + 64px);
  // transition: filter 0.5s;
  // -webkit-filter: grayscale(100%);
  // filter: grayscale(100%);
  // height: 400px;
}
.bg-img-2 {
  // max-width: 100%;
  background: url("/images/bnw_logan-weaver-IgVtUeeZOvY-unsplash.jpg")
    center/cover no-repeat;
  // height: calc(100vh + 64px);
  height: calc(100vh + 64px);
  // height: 400px;
  // height: 100%;
}

.progress-bar {
  // bottom: -10px;
  // right: 0;
  // width: 30%;
  width: 20%;

  @include media-breakpoint-up(lg) {
    // bottom: 0;
    // width: calc(33.3333% - 12px);
    width: 100%;
  }
}

// .albums-of-the-month-wrap {
//   width: 640px;
// }

.news-pic {
  max-width: 100%;
  // height: 934px;
}

.explore-more-img {
  height: 200px;

  @include media-breakpoint-up(md) {
    height: 300px;
  }

  &--bnw {
    transition: filter 0.5s;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  &--hover {
    filter: none;
  }
}

.explore-more-title {
  // z-index: 1;
  z-index: get-z-index($elements, title-on-img);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.newsletter {
  &-bg {
    background: url("/images/pim-myten-m41k1lTzjVM-unsplash.jpg") center/cover
      no-repeat fixed;
    height: 420px;
    position: relative;
    filter: brightness(0.6);

    @include media-breakpoint-up(md) {
      height: 520px;
    }

    @include media-breakpoint-up(lg) {
      height: 720px;
    }
  }

  &-content {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.theme--dark.v-expansion-panels .v-expansion-panel {
  background: transparent !important;
  color: $primary !important;
}

.theme--dark.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: $primary !important;
}

.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  border-color: $primary !important;
}

// .theme--dark.v-expansion-panels
//   .v-expansion-panel-header
//   .v-expansion-panel-header__icon
//   .v-icon {
//   display: none !important;
// }

// .faq {
//   .theme--dark.v-expansion-panels .v-expansion-panel {
//     background: transparent !important;
//     color: $primary !important;
//   }
// }

.faq {
  .theme--dark.v-expansion-panels .v-expansion-panel {
    background: transparent !important;
    color: $primary !important;
  }

  .v-expansion-panel::before {
    box-shadow: none;
  }
  // .theme--dark.v-expansion-panels
  //   .v-expansion-panel-header
  //   .v-expansion-panel-header__icon
  //   .v-icon {
  //   color: $primary !important;
  // }

  // .theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  //   border-color: $primary !important;
  // }

  // .theme--dark.v-expansion-panels
  //   .v-expansion-panel-header
  //   .v-expansion-panel-header__icon
  //   .v-icon {
  //   display: none !important;
  // }
}
</style>
