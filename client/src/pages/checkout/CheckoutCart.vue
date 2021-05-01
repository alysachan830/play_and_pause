<template>
  <div>
    <v-data-table
      class="checkout-cart-table mb-16"
      :headers="headers"
      :items="cart"
      mobile-breakpoint="0"
      show-expand
      disable-pagination
      disable-filtering
      disable-sort
      hide-default-footer
    >
      <template v-slot:item.products="{ item }">
        <div
          class="checkout-cart-table__td-inner-wrap d-md-flex align-md-center"
        >
          <v-img
            class="mr-6 hidden-sm-and-down"
            :src="item.url"
            max-width="100"
          ></v-img>
          <div>
            <p class="font-s font-sm-base font-md-m">{{ item.title }}</p>
            <p class="font-xs font-sm-s font-md-base">{{ item.artist }}</p>
          </div>
        </div>
      </template>
      <template v-slot:item.quantity="{ item }">
        <v-btn :ripple="false" min-width="auto" class="px-0" text plain>
          <v-icon small>mdi-minus</v-icon>
        </v-btn>
        <span class="px-1 px-sm-2 px-md-4">
          {{ item.quantity }}
        </span>
        <v-btn :ripple="false" min-width="auto" class="px-0" text plain>
          <v-icon small>mdi-plus</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.data-table-expand="{ item }">
        <v-btn icon :key="item.title" class="d-none d-sm-flex">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-row>
      <v-col cols="12" sm="6">
        <p class="mb-8 primary--text">70% Off! Coupon code: pp2021</p>
        <v-row>
          <v-col cols="12" sm="10">
            <v-text-field class="coupon-input" label="Coupon code" outlined>
              <template v-slot:append class="ma-0 pa-0">
                <v-btn
                  color="primary"
                  class="darkInfo--text font-xs font-md-s px-2"
                  >add coupon</v-btn
                >
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <!-- <v-btn class="coupon-input-btn">add coupon</v-btn> -->
      </v-col>
      <v-col cols="12" sm="6">
        <ul class="lightInfo--text">
          <li class="d-flex justify-space-between mb-4">
            <span class="text-uppercase font-s font-md-m">Subtotal</span>
            <span class="font-s font-md-m">392</span>
          </li>
          <li class="d-flex justify-space-between mb-4">
            <span class="text-uppercase font-s font-md-m">Shipping</span>
            <span class="font-s font-md-m">+0</span>
          </li>
          <li class="d-flex justify-space-between mb-10">
            <span class="text-uppercase font-s font-md-m">Discount</span>
            <span class="font-s font-md-m">-0</span>
          </li>
          <li class="d-flex justify-space-between">
            <span class="text-uppercase font-l font-md-xl">Total</span>
            <span class="font-l font-md-xl">HKD 392</span>
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        // {
        //   text: "Dessert (100g serving)",
        //   align: "start",
        //   sortable: false,
        //   value: "name",
        // },
        { text: "Products", value: "products", class: "text-uppercase" },
        { text: "Quantity", value: "quantity", class: "text-uppercase" },
        { text: "Price", value: "price", class: "text-uppercase" },
        {
          align: "end",
          value: "data-table-expand",
          // class: "d-none d-sm-flex",
        },
      ],
      cart: [
        {
          title: "When We All Fall Asleep, Where Do We Go?",
          url: "images/Screenshot 2021-02-16 at 6.48.16 PM.png",
          artist: "Billie Eilish",
          quantity: 1,
          price: 150,
        },
        {
          title: "When We All Fall Asleep, Where Do We Go?",
          url: "images/Screenshot 2021-02-16 at 6.48.16 PM.png",
          artist: "Billie Eilish",
          quantity: 1,
          price: 150,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.checkout-cart-table {
  border-width: 0 0 thin 0 !important;
  border-style: solid !important;
  border-color: rgba(255, 255, 255, 0.12);
  border-radius: 0 !important;

  // &__td-inner-wrap {
  //   padding-top: 28px !important;
  //   padding-bottom: 28px !important;
  // }
}

.coupon-input button {
  min-height: 42px !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border: 1px solid transparent !important;
}

::v-deep .coupon-input .v-input__append-inner {
  margin-top: 0 !important;
}

::v-deep .coupon-input .v-input__slot {
  padding: 0 0 0 12px !important;
}

::v-deep .v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 42px !important;
}
::v-deep .v-text-field--outlined .v-label {
  top: 11px !important;
}

::v-deep
  .v-data-table
  > .v-data-table__wrapper
  .v-data-table__mobile-table-row
  td:nth-child(4) {
  min-height: 0 !important;
}

// .coupon-input::after {
//   content: "12";
//   display: block;
//   background: $light-info;
//   height: 56px;
// }

// .coupon-input {
//   border-top-right-radius: 0 !important;
//   border-bottom-right-radius: 0 !important;
// }

// .coupon-input-btn {
//   border: 1px solid transparent !important;
//   position: absolute;
//   height: 56px !important;
//   transform: translateX(100%);
//   right: 0;
//   top: 0;
//   border-top-left-radius: 0px !important;
//   border-bottom-left-radius: 0px !important;
//   //   bottom: 0;
// }
</style>
