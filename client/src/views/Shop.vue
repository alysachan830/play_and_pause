<template>
  <div class="pt-18">
    <Navbar></Navbar>
    <ProductFilter></ProductFilter>
    <v-container class="pt-24">
      <v-row class="mb-12">
        <v-col
          cols="6"
          md="4"
          lg="3"
          v-for="(album, index) in albums"
          :key="index"
        >
          <router-link to="/">
            <v-card
              :loading="loading"
              class="mx-auto text-center"
              max-width="300"
              color="transparent"
              rounded="0"
              flat
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-hover v-slot="{ hover }">
                <div class="position-relative">
                  <v-img
                    max-height="100%"
                    class="mb-3"
                    :src="album.images[1].url"
                  ></v-img>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-4"
                      class="product-overlay"
                    >
                      <v-btn outlined color="primary">Add Cart</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </div>
              </v-hover>
              <v-card-title class="d-block pa-0 mb-2 font-md-l font-m">{{
                album.name
              }}</v-card-title>
              <v-card-text>
                <div class="subtitle-1">
                  <!-- 只取前3個artist的名字 -->
                  {{
                    album.artists
                      .map(artistInfo => artistInfo.name)
                      .slice(0, 3)
                      .join(", ")
                  }}
                </div>
                <div class="subtitle-1">
                  HKD {{ Math.floor(Math.random() * (300 - 100) + 100) }}
                </div>
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <div class="text-center mb-12">
        <v-pagination plain v-model="page" :length="6"></v-pagination>
      </div>
    </v-container>
    <ToTopBtn></ToTopBtn>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar";
import ProductFilter from "@/pages/products/ProductFilter";
import ToTopBtn from "@/components/common/ToTopBtn";
import Footer from "@/components/footer/Footer";
export default {
  name: "Shop",
  components: {
    Navbar,
    ProductFilter,
    ToTopBtn,
    Footer,
  },
  data: () => ({
    loading: false,
    selection: 1,
    page: 1,
    albums: [],
  }),
  mounted() {
    this.axios.get(`http://127.0.0.1:8080/test.json`).then(res => {
      this.albums = res.data.albums.items;
    });
  },
};
</script>
<style lang="scss">
@import "@/scss/helpers/zindex";
@import "@/scss/helpers/hover";
.product-overlay {
  z-index: get-z-index($elements, img-overlay) !important;
}

.theme--dark.v-pagination {
  button:focus {
    outline: 0;
  }
  .v-pagination__navigation {
    background: none !important;
    box-shadow: none !important;
    border-bottom: 1px transparent solid !important;
    .v-icon {
      font-size: map-get($font-size, "m");
    }
  }
  .v-pagination__item {
    @extend .hover__filter--darken;

    background: none !important;
    box-shadow: none !important;
    // transition: border-bottom 1s;
    border-bottom: 1px transparent solid !important;
    border-radius: 0 !important;
    transition-property: border-bottom, filter;
    transition-duration: 0.5s;
    &--active {
      // &::after {
      //   height: 2px;
      //   width: 100%;
      //   background: $primary;
      //   display: block;
      //   content: "";
      // }
      color: $primary !important;
      border-bottom: 1px $primary solid !important;
      // border-radius: 0 !important;

      &:focus {
        outline: 0;
      }
    }
  }
}

// .theme--dark.v-pagination .v-pagination__item {
//   background: transparent !important;
//   box-shadow: none;
// }

// .theme--dark.v-pagination .v-pagination__item--active {
//   color: $primary !important;
//   border-bottom: 1px $primary solid !important;
//   border-radius: 0 !important;
// }

// $pagination-border-radius: 0px !important;
</style>
