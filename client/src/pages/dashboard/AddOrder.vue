<template>
  <div class="pa-20 w-100">
    <h2 class="font-text lightInfo--text text-uppercase font-xl mb-16">
      Add orders
    </h2>
    <v-form ref="form" v-model="valid">
      <div class="mb-12">
        <!-- Title input -->
        <v-text-field
          outlined
          v-model="name"
          label="Name"
          :rules="addOrderRules.nameRules"
          required
        ></v-text-field>
        <!-- Tel input -->
        <v-text-field
          outlined
          v-model="tel"
          label="Tel"
          :rules="addOrderRules.telRules"
          required
        ></v-text-field>
        <!-- Address input -->
        <v-text-field
          outlined
          v-model="address"
          label="Address"
          :rules="addOrderRules.addressRules"
          required
        ></v-text-field>
        <!-- Email input -->
        <v-text-field
          outlined
          v-model="email"
          label="Email"
          :rules="addOrderRules.emailRules"
          required
        ></v-text-field>
        <!-- Payment method -->
        <v-select
          outlined
          hide-details
          v-model="paymentMethod"
          :items="paymentMethods"
          label="Payment methods"
        ></v-select>
        <!-- PaymentStatus checkbox -->
        <v-checkbox
          v-model="paymentStatus"
          :label="`Payment status: ${paymentStatus ? `paid` : `unpaid`}`"
        ></v-checkbox>
        <v-divider class="my-10"></v-divider>
        <!-- Add item to cart -->
        <v-subheader class="px-0 lightInfo--text text-uppercase">
          Add items
        </v-subheader>
        <v-row>
          <v-col>
            <v-text-field
              outlined
              label="Product id"
              hint="Product id can be founded in Products tab"
              v-model="addItemId"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              label="Quantity"
              type="number"
              v-model="addItemQuantity"
            >
              <template v-slot:append-outer class="mt-0">
                <v-btn icon text class="h-auto w-auto" @click="addItem">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-subheader class="px-0 lightInfo--text text-uppercase"
          >items</v-subheader
        >

        <!-- Cart item table -->
        <v-data-table :headers="cartHeaders" :items="cart" :items-per-page="5">
          <!-- Confirm delete dialog -->
          <template v-slot:top>
            <v-dialog v-model="deleteDialog" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Are you sure you want to delete
                  <span class="font-weight-bold">{{ deleteItemTitle }}</span>
                  ?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <!-- Edit cart item quantity -->
          <template v-slot:item.quantity="props">
            <v-edit-dialog
              :return-value.sync="props.item.quantity"
              large
              persistent
              @save="saveEdit"
              @cancel="cancelEdit"
            >
              <span class="mr-2">{{ props.item.quantity }}</span>
              <v-icon small class="mr-2"> mdi-pencil </v-icon>
              <template v-slot:input>
                <div class="mt-4 title">Update quantity</div>
                <v-text-field
                  v-model="props.item.quantity"
                  type="number"
                  label="Edit"
                  single-line
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <!-- Delete cart item -->
          <template v-slot:item.delete="{ item }">
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
        <!-- The snackbar after saving edited -->
        <v-snackbar
          class="darkInfo--text"
          v-model="saveEditSnack"
          :timeout="1500"
          :color="saveEditSnackColor"
        >
          {{ saveEditSnackText }}
        </v-snackbar>
      </div>
      <div class="text-center">
        <v-btn
          type="submit"
          @click="createOrder"
          :disabled="!valid || cart.length === 0"
          color="primary"
          outlined
          width="200"
        >
          Create order
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: "",
      tel: "",
      address: "",
      email: "",
      paymentMethod: "VISA",
      addItemId: "",
      addItemQuantity: 1,
      paymentMethods: ["VISA", "Paypal", "Apply Pay", "Alipay", "WeChat Pay"],
      paymentStatus: false,
      deleteDialog: false,
      deleteItemTitle: "",
      deleteItemIndex: null,
      cart: [],
      cartHeaders: [
        {
          text: "Product Id",
          value: "productId",
          class: "text-uppercase",
        },
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
          text: "Original price",
          value: "originalPrice",
          class: "text-uppercase",
        },
        {
          text: "Price",
          value: "price",
          class: "text-uppercase",
        },
        {
          text: "Quantity",
          value: "quantity",
          class: "text-uppercase",
        },
        {
          text: "Delete",
          value: "delete",
          class: "text-uppercase",
        },
      ],
      saveEditSnack: false,
      saveEditSnackColor: "",
      saveEditSnackText: "",
      addOrderRules: {
        nameRules: [v => !!v || "Title is required"],
        telRules: [v => !!v || "Tel is required"],
        addressRules: [v => !!v || "Address is required"],
        emailRules: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
      },
    };
  },
  methods: {
    addItem() {
      const data = {
        productId: this.addItemId,
        title: "demo title",
        artist: "demo artist",
        originalPrice: 250,
        price: 100,
        quantity: Number(this.addItemQuantity),
      };
      this.cart.push(data);
    },
    deleteItem(item) {
      this.deleteItemTitle = item.title;
      this.deleteItemIndex = this.cart.indexOf(item);
      this.deleteDialog = true;
    },
    deleteItemConfirm() {
      this.cart.splice(this.deleteItemIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      console.log("run!!");
      this.deleteItemTitle = "";
      this.deleteItemIndex = null;
      this.deleteDialog = false;
    },
    saveEdit() {
      this.saveEditSnack = true;
      this.saveEditSnackColor = "primary";
      this.saveEditSnackText = "Data saved!";
    },
    cancelEdit() {
      this.saveEditSnack = true;
      this.saveEditSnackColor = "error";
      this.saveEditSnackText = "Data unsaved!";
    },
    createOrder() {},
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-snack__content {
    color: $dark-info;
  }
}
</style>
