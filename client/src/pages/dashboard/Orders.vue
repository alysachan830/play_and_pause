<template>
  <div class="pa-20 w-100">
    <div class="d-flex align-center">
      <h2 class="font-text lightInfo--text text-uppercase font-xl">Orders</h2>
      <v-spacer></v-spacer>
      <!-- Search bar -->
      <v-text-field
        v-model="search"
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <v-data-table
      :headers="headers"
      :items="orders"
      :search="search"
      :items-per-page="15"
      item-key="orderId"
    >
      <template v-slot:top>
        <v-dialog v-model="editDialog" max-width="500px">
          <v-card>
            <v-card-title class="mb-8">
              <span class="headline">Edit item</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="selectedItem.name"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="selectedItem.tel"
                label="Tel"
              ></v-text-field>
              <v-text-field
                v-model="selectedItem.address"
                label="Address"
              ></v-text-field>
              <v-text-field
                v-model="selectedItem.email"
                label="Email"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeEdit">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveEdit"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="deleteDialog" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="purchasedDialog">
          <v-card>
            <v-card-title class="headline">Purchased items</v-card-title>
            <v-card-text>
              <PurchasedDialogContent
                :itemList="selectedItem.purchased"
              ></PurchasedDialogContent>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closePurchased"
                >Cancel</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.paymentStatus="{ item }">
        <span
          :class="[
            item.paymentStatus
              ? 'payment-status--success'
              : 'payment-status--fail',
          ]"
          >{{ item.paymentStatus ? "Success" : "Fail" }}</span
        >
      </template>
      <template v-slot:item.purchased="{ item }">
        <v-icon small @click="showPurchased(item)">
          mdi-dots-horizontal
        </v-icon>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import moment from "moment";
import PurchasedDialogContent from "./orders/PurchasedDialogContent";
export default {
  components: {
    PurchasedDialogContent,
  },
  data() {
    return {
      search: "",
      searchBar: "",
      // addOrderPurchased: "",
      // newOrder: {
      //   name: "",
      //   tel: "",
      //   address: "",
      //   email: "",
      //   paymentMethod: "",
      //   total: 0,
      //   paymentStatus: false,
      //   purchased: [],
      // },
      // paymentMethods: ["VISA", "Paypal", "Apply Pay", "Alipay", "WeChat Pay"],
      purchasedHeaders: [
        {
          text: "Title",
          value: "title",
          class: "text-uppercase",
        },
        {
          text: "Artist",
          value: "artist",
          class: "text-uppercase",
        },
        {
          text: "Price",
          value: "price",
          class: "text-uppercase",
        },
        {
          text: "Original price",
          value: "originalPrice",
          class: "text-uppercase",
        },
        {
          text: "Price",
          value: "price",
          class: "text-uppercase",
        },
      ],
      headers: [
        {
          text: "order id",
          value: "orderId",
          class: "text-uppercase",
        },
        {
          text: "name",
          value: "name",
          class: "text-uppercase",
        },
        {
          text: "tel",
          value: "tel",
          class: "text-uppercase",
        },
        {
          text: "address",
          value: "address",
          class: "text-uppercase",
        },
        {
          text: "email",
          value: "email",
          class: "text-uppercase",
        },
        {
          text: "total",
          value: "total",
          class: "text-uppercase",
        },
        {
          text: "date",
          value: "date",
          class: "text-uppercase",
        },
        {
          text: "payment method",
          value: "paymentMethod",
          class: "text-uppercase",
        },
        {
          text: "payment status",
          value: "paymentStatus",
          class: "text-uppercase",
        },
        {
          text: "purchased",
          value: "purchased",
          class: "text-uppercase",
        },
        {
          text: "actions",
          value: "actions",
          class: "text-uppercase",
        },
      ],
      editDialog: false,
      editedIndex: null,
      selectedItem: {
        name: "",
        tel: "",
        address: "",
        email: "",
        paymentStatus: "",
      },
      defaultItem: {
        name: "",
        tel: "",
        address: "",
        email: "",
        paymentStatus: "",
      },
      deleteDialog: false,
      purchasedDialog: false,
      orders: [],
    };
  },
  mounted() {
    moment().format();
    const customer = {
      orderId: `${moment().valueOf()}`,
      name: "",
      tel: "91234567",
      address: "12/f, ABC building, D road",
      email: "demoexample@gmail.com",
      date: moment().format("DD-MM-YYYY"),
      total: 300,
      paymentMethod: "VISA",
      paymentStatus: true,
      purchased: [
        {
          id: "23910909",
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
          originalPrice: 150,
          price: 100,
          quantity: 1,
          category: "new release",
          genre: "pop",
          date: Date.now(),
          available: true,
        },
        {
          id: "23910910",
          title: "Celebrity",
          artist: "IU",
          originalPrice: 150,
          price: 100,
          quantity: 2,
          category: "bestseller",
          genre: "pop",
          date: Date.now(),
          available: true,
        },
        {
          id: "23910911",
          title: "大小說家",
          artist: "林宥嘉",
          originalPrice: 150,
          price: 100,
          quantity: 1,
          category: "bestseller",
          genre: "pop",
          date: Date.now(),
          available: true,
        },
        {
          id: "23910912",
          title: "Vision",
          artist: "Grimes",
          originalPrice: 150,
          price: 100,
          quantity: 1,
          category: "bestseller",
          genre: "pop",
          date: Date.now(),
          available: true,
        },
        {
          id: "23910913",
          title: "スポーツ",
          artist: "東京事変",
          originalPrice: 150,
          price: 100,
          quantity: 1,
          category: "bestseller",
          genre: "indie",
          date: Date.now(),
          available: true,
        },
        {
          id: "23910914",
          title: "Wi Ing Wi Ing 위잉위잉",
          artist: "HYUKOH",
          originalPrice: 200,
          price: 100,
          quantity: 3,
          category: "new release",
          genre: "indie",
          date: Date.now(),
          available: true,
        },
      ],
    };
    const changeCustomer = (data, num) => {
      const newData = { ...data };
      newData.name = `Customer name ${num}`;
      return newData;
    };
    for (let i = 0; i < 30; i++) {
      this.orders.push(changeCustomer(customer, i));
    }
  },
  // watch: {
  //   dialog(val) {
  //     val || this.closeEdit();
  //   },
  // },

  methods: {
    addOrder() {},
    // addItem() {
    //   this.newOrder.purchased.push(this.addOrderPurchased);
    // },
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.selectedItem = { ...item };
      this.editDialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.deleteDialog = true;
    },
    deleteItemConfirm() {
      this.orders.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeEdit() {
      this.editDialog = false;
      this.selectedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = null;
      // this.$nextTick(() => {
      //   this.selectedItem = Object.assign({}, this.defaultItem);
      //   this.editedIndex = null;
      // });
    },
    saveEdit() {
      Object.assign(this.orders[this.editedIndex], this.selectedItem);
      // The code below will not show the update in the table
      // this.orders[this.editedIndex] = { ...this.selectedItem };
      this.closeEdit();
    },
    closeDelete() {
      this.deleteDialog = false;
      this.editedIndex = null;
      // this.$nextTick(() => (this.editedIndex = null));
    },
    showPurchased(item) {
      this.selectedItem = { ...item };
      this.purchasedDialog = true;
    },
    closePurchased() {
      this.purchasedDialog = false;
      this.selectedItem = Object.assign({}, this.defaultItem);
      // this.$nextTick(
      //   () => (this.selectedItem = Object.assign({}, this.defaultItem))
      // );
    },
    // filterName(value, search, item) {
    //   return item.name == search;
    // },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .payment-status {
  &--success {
    color: $primary;
  }
  &--fail {
    color: $danger;
  }
}
</style>
