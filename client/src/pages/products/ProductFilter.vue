<template>
  <v-expansion-panels flat class="productFilter w-100">
    <v-expansion-panel>
      <v-expansion-panel-header class="productFilter__header py-0">
        <div class="text-uppercase font-weight-bold font-base mr-4">
          Filter
          <!-- <v-icon color="lightInfo" size="18">mdi-plus</v-icon> -->
        </div>
        <ul class="filter-result d-flex">
          <li class="filter-result__item font-xs font-sm-s font-md-base">
            All Categories
          </li>
          <li class="filter-result__item font-xs font-sm-s font-md-base">
            All genres
          </li>
          <li class="filter-result__item font-xs font-sm-s font-md-base">
            From oldest to latest
          </li>
          <li class="filter-result__item font-xs font-sm-s font-md-base">
            100HKD - 300HKD
          </li>
        </ul>
        <!-- <p class="font-s">
            All Categories | All genres | From oldest to latest | 100HKD -
            300HKD
          </p> -->
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row>
          <v-col cols="12" md="2">
            <v-select :items="categories" label="Category"></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-select :items="genres" label="Genre"></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-select :items="sortMethod" label="Sort"></v-select>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center">
            <v-range-slider
              dense
              hide-details
              max="100"
              min="-100"
              label="Price"
              v-model="value"
            ></v-range-slider>
            <v-subheader class="font-xs px-0 ml-3"
              >HKD {{ value[0] + 200 }} - {{ value[1] + 200 }}</v-subheader
            >
            <!-- <v-subheader class="font-base pa-0 mr-3">Price</v-subheader> -->
            <!-- <v-checkbox
              v-model="discountItem"
              label="Discount item"
            ></v-checkbox> -->
          </v-col>
          <v-col
            cols="12"
            md="2"
            class="d-md-flex align-md-center justify-md-end"
          >
            <v-btn outlined color="primary" class="w-100 w-md-auto"
              >Search</v-btn
            >
          </v-col>
        </v-row>
        <!-- <v-select :items="categories" label="Category"></v-select>
        <v-select :items="genres" label="Genre"></v-select>
        <v-select :items="sortMethod" label="Sort"></v-select>
        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          hide-details
          class="align-center"
        >
          <template v-slot:prepend>
            <v-text-field
              :value="range[0]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              @change="$set(range, 0, $event)"
            ></v-text-field>
          </template>
          <template v-slot:append>
            <v-text-field
              :value="range[1]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              @change="$set(range, 1, $event)"
            ></v-text-field>
          </template>
        </v-range-slider>
        <v-btn outlined color="primary">Search</v-btn> -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      categories: ["New release", "Bestseller"],
      genres: [
        "Pop",
        "Indie",
        "Jazz",
        "R&B",
        "Hip-hop",
        "Rock",
        "Dance / Electronic ",
      ],
      sortMethod: ["From oldest to latest", "From latest to oldest"],
      value: [-100, 100],
      // min: 100,
      // max: 300,
      // range: [100, 300],
      // discountItem: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/helpers/zindex.scss";

.productFilter {
  z-index: get-z-index($elements, product-filter);

  &__header {
    height: 60px;
  }

  &.v-expansion-panels {
    border-radius: 0;
    position: fixed;
  }

  &.theme--dark.v-expansion-panels
    .v-expansion-panel-header
    .v-expansion-panel-header__icon
    .v-icon {
    display: block !important;
  }

  &.theme--dark.v-expansion-panels .v-expansion-panel {
    background: rgb(34, 34, 34) !important;
    color: $light-info !important;
  }

  .v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
    flex: 0 1 auto;
  }

  // .theme--dark.v-expansion-panels
  //   .v-expansion-panel-header
  //   .v-expansion-panel-header__icon
  //   .v-icon {
  //   display: block !important;
  // }

  .v-expansion-panel-content__wrap {
    // flex: 0 1 auto !important;
    display: flex;
  }
}

.filter-result__item {
  border-right: solid 1px rgb(152, 152, 152);
  color: rgb(152, 152, 152);
  padding: 0 10px;
}

.filter-result li:last-child {
  border: none;
}

// .theme--dark.v-expansion-panels .v-expansion-panel {
//   background: rgb(34, 34, 34) !important;
//   color: $light-info !important;
// }

// .v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
//   flex: 0 1 auto;
// }

// // .theme--dark.v-expansion-panels
// //   .v-expansion-panel-header
// //   .v-expansion-panel-header__icon
// //   .v-icon {
// //   display: block !important;
// // }

// .filter-result__item {
//   border-right: solid 1px rgb(152, 152, 152);
//   color: rgb(152, 152, 152);
//   padding: 0 10px;
// }

// .filter-result li:last-child {
//   border: none;
// }

// .v-expansion-panel-content__wrap {
//   // flex: 0 1 auto !important;
//   display: flex;
// }
</style>
