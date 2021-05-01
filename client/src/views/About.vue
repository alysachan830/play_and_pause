<template>
  <div>
    <Navbar></Navbar>
    <v-container class="pt-24">
      <v-row class="mb-18 mb-md-24">
        <v-col cols="12" md="6">
          <v-img src="images/jamakassi-wejxKZ-9IZg-unsplash.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="5" class="offset-md-1">
          <h2 class="mb-14">about us</h2>
          <p class="font-xl font-md-2xl mb-14">
            Record store based in Hong Kong, exploring innovative and creative
            music.
          </p>
          <ul class="contact-info py-6 py-md-10 pl-14">
            <li class="font-l font-md-xl mb-4">
              Email: playandpause@gmail.com
            </li>
            <li class="font-l font-md-xl mb-4">Contact: 2123 4567</li>
            <li>
              <v-btn icon class="mr-5">
                <v-icon class="font-2xl" color="primary">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="font-2xl" color="primary">mdi-instagram</v-icon>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
      <div class="mb-18 mb-md-24">
        <h2 class="mb-14">shop</h2>
        <v-row>
          <v-col class="mb-2 mb-md-0" cols="12" md="6">
            <v-card>
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="300"
                src="images/mick-haupt-jzPjVrT2Xqg-unsplash.jpg"
              ></v-img>

              <v-card-title class="text-uppercase font-xl"
                >Tsun Yip Lane</v-card-title
              >

              <v-card-text>
                <ul class="font-base">
                  <li class="mb-3">
                    <span class="text-uppercase">Opening hours:</span> 10:00 —
                    20:30
                  </li>
                  <li class="mb-3">
                    <span class="text-uppercase">Contact:</span> 2123 4567
                  </li>
                  <li>
                    <span class="text-uppercase">Address:</span> Unit C, 15/F,
                    ABC Building, Tsun Yip Lane
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="300"
                src="images/chloe-evans-_OCl663sk1M-unsplash.jpg"
              ></v-img>

              <v-card-title class="text-uppercase font-xl"
                >Tai nan street</v-card-title
              >

              <v-card-text>
                <ul class="font-base">
                  <li class="mb-3">
                    <span class="text-uppercase">Opening hours:</span> 10:00 —
                    20:30
                  </li>
                  <li class="mb-3">
                    <span class="text-uppercase">Contact:</span> 3456 7890
                  </li>
                  <li>
                    <span class="text-uppercase">Address:</span> No.231, Tai Nan
                    Street
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <ToTopBtn></ToTopBtn>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar";
import ToTopBtn from "@/components/common/ToTopBtn";
import Footer from "@/components/footer/Footer";

export default {
  components: {
    Navbar,
    ToTopBtn,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.contact-info {
  border-left: 1px solid $light-info;
}

::v-deep .theme--dark.v-card {
  background: none !important;
  box-shadow: none !important;
  border-width: 0 1px 1px 1px !important;
  border-style: solid !important;
  border-color: $dark-info !important;
}
</style>
