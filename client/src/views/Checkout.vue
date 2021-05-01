<template>
  <div>
    <Navbar></Navbar>
    <v-container class="pt-24">
      <v-btn text plain class="mb-10 mb-md-16">
        <v-icon size="18" class="mr-2">mdi-chevron-left</v-icon>
        Back to shop</v-btn
      >
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" class="text-uppercase">
            Shopping Cart
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2" class="text-uppercase">
            Billing details
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" class="text-uppercase">
            Complete order
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <CheckoutCart class="mb-16"></CheckoutCart>
            <!-- <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card> -->
            <div class="text-center text-md-right">
              <v-btn outlined color="primary" @click="e1 = 2"> Continue </v-btn>
            </div>
            <!-- <v-btn text> Cancel </v-btn> -->
          </v-stepper-content>
          <v-stepper-content step="2">
            <!-- <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card> -->
            <CheckoutBilling></CheckoutBilling>
            <div class="text-center text-md-right">
              <v-btn outlined color="primary" @click="e1 = 3"> Continue </v-btn>
              <v-btn color="darkInfo" class="ml-4" @click="e1 = 1">
                Back
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3">
            <CheckoutSuccess class="mb-16 mb-md-24"></CheckoutSuccess>
            <div class="text-center mb-18">
              <v-btn outlined color="primary">Back to shop</v-btn>
            </div>
            <!-- <v-btn color="primary" @click="e1 = 1"> Continue </v-btn> -->
            <!-- <v-btn text @click="e1 = 2"> Cancel </v-btn> -->
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
    <ToTopBtn></ToTopBtn>
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar";
import CheckoutCart from "@/pages/checkout/CheckoutCart";
import CheckoutBilling from "@/pages/checkout/CheckoutBilling";
import CheckoutSuccess from "@/pages/checkout/CheckoutSuccess";
import ToTopBtn from "@/components/common/ToTopBtn";
export default {
  components: {
    Navbar,
    CheckoutCart,
    CheckoutBilling,
    CheckoutSuccess,
    ToTopBtn,
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-stepper {
  background: none !important;
  box-shadow: none !important;

  &__header {
    box-shadow: none !important;
    // background: $dark-info !important;
    // border-radius: 10px !important;
  }

  &__content {
    padding: 32px 24px 16px 24px !important;

    @include media-breakpoint-up(md) {
      padding: 80px 24px 16px 24px !important;
    }
  }
}

::v-deep .theme--dark.v-stepper .v-stepper__step__step {
  color: #000000 !important;
  .v-icon {
    @extend .v-stepper__step__step;
  }
}

::v-deep
  .theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: none !important;
}

::v-deep .v-data-table td {
  padding-top: map-get($spacers, 5) !important;
  padding-bottom: map-get($spacers, 5) !important;

  @include media-breakpoint-up(md) {
    padding-top: map-get($spacers, 9) !important;
    padding-bottom: map-get($spacers, 9) !important;
  }
}

// ::v-deep .theme--dark.v-stepper .v-stepper__step__step .v-icon {
//   color: #000000 !important;
// }

// >>> .checkout-cart-table .v-data-table__wrapper {
//   background: red !important;
// }
</style>
