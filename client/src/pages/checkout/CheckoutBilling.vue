<template>
  <v-form class="pt-1" ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" md="6" class="pb-0 pb-md-3">
        <v-text-field
          outlined
          v-model="firstName"
          :rules="firstNameRules"
          label="First name"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pt-0 pt-md-3">
        <v-text-field
          outlined
          v-model="lastName"
          :rules="lastNameRules"
          label="Last name"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-text-field
      outlined
      v-model="tel"
      label="Phone"
      :rules="telRules"
      required
    ></v-text-field>

    <v-text-field
      outlined
      class="email"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-checkbox
      class="email-checkbox mt-0"
      v-model="checkbox"
      label="Keep me up to date on news and exclusive offers"
      :ripple="false"
    ></v-checkbox>

    <v-text-field
      outlined
      v-model="address"
      label="Address"
      :rules="addressRules"
      required
    ></v-text-field>

    <v-row>
      <v-col cols="12" md="6" class="pb-0 pb-md-3">
        <v-select
          outlined
          :items="countryRegionList"
          :rules="countryRegionRules"
          v-model="countryRegion"
          item-text="countryName"
          label="Country / Region"
          @change="updateRegionList"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6" class="pt-0 pt-md-3">
        <v-select
          outlined
          v-model="region"
          label="Region"
          :items="regionList"
          :rules="regionRules"
          no-data-text="Please select your country / region"
          item-text="name"
        ></v-select>
      </v-col>
    </v-row>

    <v-select
      outlined
      v-model="paymentMethod"
      label="Payment"
      :items="paymentList"
      :rules="paymentRules"
    ></v-select>

    <v-textarea
      outlined
      v-model="orderNotes"
      name="orderNotes"
      label="Order notes"
    ></v-textarea>

    <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
  </v-form>
</template>

<script>
export default {
  data: () => ({
    countryRegionList: [],
    regionList: [],
    valid: true,
    firstName: "",
    lastName: "",
    tel: "",
    address: "",
    paymentMethod: "",
    orderNotes: "",
    countryRegion: "",
    region: "",
    paymentList: [
      "Visa",
      "Paypal",
      "Google Pay",
      "Apple Pay",
      "Alipay",
      "WeChat Pay",
      "FPS",
    ],
    firstNameRules: [v => !!v || "First name is required"],
    lastNameRules: [v => !!v || "Last name is required"],
    telRules: [
      v => !!v || "Phone is required",
      v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
      v =>
        /^[0-9.)(+-]+$/.test(v.trim()) ||
        "Phone must be valid. Only digits and symbols: +, -, () , . , are allowed.",
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    addressRules: [v => !!v || "Address is required"],
    countryRegionRules: [v => !!v || "Country / region is required"],
    regionRules: [v => !!v || "Region is required"],
    paymentRules: [v => !!v || "Payment is required"],
    select: null,
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    updateRegionList() {
      const countryRegionItem = this.countryRegionList.find(
        item => item.countryName === this.countryRegion
      );
      this.regionList = countryRegionItem.regions;
    },
  },
  watch: {
    countryRegion: function () {
      this.region = "";
    },
  },
  mounted() {
    this.axios
      .get("http://127.0.0.1:8080/country-region-data.json")
      .then(res => {
        this.countryRegionList = res.data;
        const countryRegionItem = this.countryRegionList.find(
          item => item.countryName === this.countryRegion
        );
        this.regionList = countryRegionItem.regions;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
// ::v-deep .email-checkbox .v-label,
// ::v-deep .email-checkbox .v-icon {
//   font-size: 14px !important;
// }

::v-deep .email {
  .v-text-field__details {
    margin-bottom: 0 !important;
  }
  .v-text-field__details {
    min-height: 0 !important;
  }

  .v-messages {
    // padding: 4px 0 !important;
    min-height: 0 !important;
  }
}

::v-deep .email-checkbox {
  .v-label {
    font-size: 14px !important;
  }
  .v-icon {
    font-size: 18px !important;
  }
}
</style>
