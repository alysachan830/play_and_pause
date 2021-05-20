<template>
  <div class="pa-20 w-100">
    <div>
      <div class="d-flex align-center">
        <h2 class="font-text lightInfo--text text-uppercase font-xl">
          Coupons
        </h2>
        <v-spacer></v-spacer>
        <!-- Search bar -->
        <v-text-field
          v-model="searchCoupon"
          label="Search coupon"
          append-icon="mdi-magnify"
          class="mx-4"
        ></v-text-field>
        <!-- Add coupon diglog -->
        <div class="text-right">
          <v-dialog v-model="addCouponDialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <v-icon class="mr-2" small>mdi-plus</v-icon>
                Add coupon
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="mb-6"> Add coupon </v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <!-- Title input -->
                  <v-text-field
                    v-model="newCoupon.title"
                    :rules="addCouponRules.titleRules"
                    label="Title"
                    required
                  ></v-text-field>
                  <!-- Data picker menu -->
                  <v-menu
                    ref="dataPickerModal"
                    v-model="dataPickerModal"
                    :close-on-content-click="false"
                    :return-value.sync="newCoupon.dueDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="newCoupon.dueDate"
                        label="Picker in menu"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="newCoupon.dueDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="dataPickerModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dataPickerModal.save(newCoupon.dueDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                  <!-- Data picker input -->
                  <!-- <v-dialog
                  ref="dialog"
                  v-model="dataPickerModal"
                  :return-value.sync="dueDate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dueDate"
                      label="Due date"
                      readonly

                      required
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="dueDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dataPickerModal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.dialog.save(dueDate)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog> -->
                  <!-- Discount input -->
                  <v-text-field
                    v-model="newCoupon.discount"
                    label="Discount"
                    type="number"
                    :rules="addCouponRules.discountRules"
                    hint="Percentage sign (%) is not needed. E.g: Fill in 80 for 80%"
                    required
                  ></v-text-field>
                  <!-- Coupon code -->
                  <v-text-field
                    v-model="newCoupon.couponCode"
                    label="Coupon code"
                    :rules="addCouponRules.couponCodeRules"
                    required
                  ></v-text-field>
                  <!-- Available checkbox -->
                  <v-checkbox
                    v-model="newCoupon.available"
                    label="Available"
                  ></v-checkbox>
                  <div class="text-center">
                    <v-btn
                      class="mr-4"
                      @click="closeAddCouponDialog"
                      color="red"
                      outlined
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      type="submit"
                      @click="addCoupon"
                      :disabled="!valid"
                      color="primary"
                      outlined
                    >
                      Add
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <!-- All coupon table -->
      <v-data-table
        :headers="headers"
        :items="coupons"
        :items-per-page="10"
        :search="searchCoupon"
      >
        <template v-slot:top>
          <!-- Edit dialog -->
          <v-dialog v-model="couponDialog" width="500">
            <v-card>
              <v-card-title class="headline">Coupon</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="selectedCoupon.title"
                  label="Title"
                ></v-text-field>
                <v-text-field
                  v-model="selectedCoupon.dueDate"
                  label="Due date"
                ></v-text-field>
                <v-text-field
                  v-model="selectedCoupon.discount"
                  label="Discount"
                ></v-text-field>
                <v-text-field
                  v-model="selectedCoupon.couponCode"
                  label="Coupon code"
                ></v-text-field>
                <v-checkbox
                  v-model="selectedCoupon.available"
                  label="Available"
                ></v-checkbox>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeEdit"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="saveEdit">Save</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Confirm delete dialog -->
          <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete
                <span class="font-weight-bold">{{ deleteCouponTitle }}</span>
                ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteCouponConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.available="{ item }">
          <span
            :class="[
              item.available ? 'coupon--available' : 'coupon--unavailable',
            ]"
          >
            {{ item.available ? "Yes" : "No" }}
          </span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editCoupon(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteCoupon(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      newCoupon: {
        title: "",
        dueDate: new Date().toISOString().substr(0, 10),
        discount: 10,
        couponCode: "",
        available: true,
      },
      defaultAddCoupon: {
        title: "",
        dueDate: new Date().toISOString().substr(0, 10),
        discount: 10,
        couponCode: "",
        available: true,
      },
      addCouponRules: {
        titleRules: [v => !!v || "Title is required"],
        discountRules: [
          v => (v < 100 && v > 0) || "Discount must be a value between 1-99",
        ],
        couponCodeRules: [v => !!v || "Coupon code is required"],
      },
      dataPickerModal: false,
      searchCoupon: "",
      addCouponDialog: false,
      headers: [
        {
          text: "Title",
          value: "title",
          sortable: false,
        },
        { text: "Due date", value: "dueDate" },
        { text: "Discount", value: "discount" },
        { text: "Coupon code", value: "couponCode", sortable: false },
        { text: "Available", value: "available", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      coupons: [
        {
          title: "Summer sale",
          dueDate: "2021-05-28",
          discount: 80,
          couponCode: "summer2021",
          available: true,
        },
        {
          title: "Mother's day sale",
          dueDate: "2021-05-17",
          discount: 30,
          couponCode: "mother2021",
          available: true,
        },
        {
          title: "May Sale",
          dueDate: "2021-05-27",
          discount: 20,
          couponCode: "may2021",
          available: false,
        },
      ],
      selectedCoupon: {
        title: "",
        dueDate: "",
        discount: 0,
        couponCode: "",
        available: true,
      },
      defaultCoupon: {
        title: "",
        dueDate: "",
        discount: 0,
        couponCode: "",
        available: true,
      },
      selectedCouponIndex: null,
      couponDialog: false,
      deleteDialog: false,
      deleteCouponTitle: "",
    };
  },
  methods: {
    closeAddCouponDialog() {
      this.newCoupon = Object.assign({}, this.defaultAddCoupon);
      this.addCouponDialog = false;
    },
    validate() {
      this.$refs.form.validate();
    },
    editCoupon(item) {
      this.selectedCouponIndex = this.coupons.indexOf(item);
      this.selectedCoupon = { ...item };
      this.couponDialog = true;
    },
    closeEdit() {
      this.selectedCouponIndex = null;
      this.selectedCoupon = Object.assign({}, this.defaultCoupon);
      this.couponDialog = false;
    },
    saveEdit() {
      Object.assign(
        this.coupons[this.selectedCouponIndex],
        this.selectedCoupon
      );
      this.closeEdit();
    },
    closeDelete() {
      this.deleteDialog = false;
      this.selectedCouponIndex = null;
      this.deleteCouponTitle = "";
    },
    addCoupon() {
      this.coupons.push(this.newCoupon);
      this.newCoupon = Object.assign({}, this.defaultAddCoupon);
      this.addCouponDialog = false;
    },
    deleteCoupon(item) {
      this.deleteCouponTitle = item.title;
      this.selectedCouponIndex = this.coupons.indexOf(item);
      this.deleteDialog = true;
    },
    deleteCouponConfirm() {
      this.coupons.splice(this.selectedCouponIndex, 1);
      this.deleteDialog = false;
      this.selectedCouponIndex = null;
      this.deleteCouponTitle = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.coupon {
  &--available {
    color: $primary;
  }
  &--unavailable {
    color: $danger;
  }
}
</style>
