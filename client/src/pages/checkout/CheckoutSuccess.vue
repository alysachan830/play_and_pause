<template>
  <div>
    <div class="text-center mb-16 mb-md-24">
      <v-icon class="font-6xl font-md-8xl mb-2" color="primary"
        >mdi-check-circle</v-icon
      >
      <p class="primary--text font-xl font-md-2xl">
        Your order has been placed!
      </p>
    </div>
    <div class="mb-16">
      <h4 class="font-text font-s lightInfo--text text-uppercase mb-4">
        order details
      </h4>
      <v-data-table
        :headers="orderHeaders"
        :items="cart"
        class="order-details"
        mobile-breakpoint="0"
        disable-pagination
        disable-filtering
        disable-sort
        hide-default-footer
      >
        <!-- :footer-props="{
              pageText: '132132',
            }" -->
        <!-- hide-default-footer -->
        <!-- <template v-slot:body.append>
              </template> -->
        <!-- <template v-slot:body.append="{headers}">
                  <tr>
                      <td> {{ headers.}} </td>
                  </tr>
              </template> -->
      </v-data-table>
    </div>
    <div>
      <h4 class="font-text font-s lightInfo--text text-uppercase mb-4">
        Personal information
      </h4>
      <v-data-table
        class="personal-info"
        :headers="personalHeaders"
        :items="personalInfo"
        disable-pagination
        disable-filtering
        disable-sort
        hide-default-footer
        mobile-breakpoint="0"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderHeaders: [
        { text: "Products", value: "title", class: "text-uppercase" },
        { text: "Quantity", value: "quantity", class: "text-uppercase" },
        { text: "Price", value: "price", class: "text-uppercase" },
      ],
      cart: [
        {
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
          quantity: 1,
          price: 150,
        },
        {
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
          quantity: 1,
          price: 150,
        },
        {
          title: "Total",
          artist: "",
          quantity: "",
          price: 588,
        },
      ],
      personalHeaders: [
        { text: "title", value: "title", class: "d-none" },
        { text: "value", value: "value", class: "d-none" },
      ],
      personalInfo: [
        {
          title: "name",
          value: "Alysa Chan",
        },
        {
          title: "email",
          value: "example@gmail.com",
        },
        {
          title: "tel",
          value: "12345678",
        },
        {
          title: "address",
          value: "Flat C, 3/F, B building, XYZ street, Mong Kok",
        },
        {
          title: "payment",
          value: "Success",
        },
        // {
        //   name: "Alysa Chan",
        //   email: "example@gmail.com",
        //   tel: "12345678",
        //   address: "Flat C, 3/F, B building, XYZ street, Mong Kok",
        //   payment: true,
        // },
      ],
    };
  },
  //   methods: {
  //     isLastRow(item) {
  //       if (item.title === "Total") {
  //         return "table-total";
  //       }
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
::v-deep .order-details tbody tr:last-child {
  td {
    font-size: 20px;
  }
  //   background: red;
}

::v-deep .personal-info td {
  width: 50% !important;
}

::v-deep .personal-info tr td:first-child {
  text-transform: uppercase;
}

// .table-total {
//   font-size: 30px !important;
// }
</style>
