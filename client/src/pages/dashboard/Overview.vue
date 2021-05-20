<template>
  <div class="pa-20 w-100">
    <div class="d-flex justify-space-between mb-14">
      <!-- <div class="d-flex align-center">
        <a href="#" class="mr-3 font-weight-medium font-m">Total Profit</a>
        <a href="#" class="font-weight-medium font-m">Total Order</a>
      </div> -->
      <v-tabs v-model="tab" align-with-title class="w-auto">
        <!-- <v-tabs-slider color="yellow"></v-tabs-slider> -->

        <v-tab>Total Profit</v-tab>
        <v-tab>Total Order</v-tab>
      </v-tabs>
      <!-- <div class="d-flex align-items-center"> -->
      <v-subheader class="text-uppercase mr-3 h-auto"> Sort By: </v-subheader>
      <v-radio-group row v-model="radioGroup">
        <v-radio label="Day" value="day"></v-radio>
        <v-radio label="Month" value="month"></v-radio>
        <v-radio label="Year" value="year"></v-radio>
      </v-radio-group>

      <v-select
        label="Month"
        class="sort-select mr-3"
        :items="Array.from(Array(12), (n, i) => i + 1)"
      ></v-select>
      <v-select label="Year" class="sort-select"></v-select>
      <!-- </div> -->
    </div>
    <v-tabs-items class="mb-14" v-model="tab">
      <v-tab-item>
        <TotalProfit></TotalProfit>
      </v-tab-item>
      <v-tab-item>
        <TotalOrder></TotalOrder>
      </v-tab-item>
    </v-tabs-items>
    <v-row class="mb-14">
      <v-col v-for="item in totalCount" :key="item.title">
        <div class="darkInfo rounded px-8 py-10">
          <v-subheader class="px-0 mb-4 h-auto font-base text-uppercase">
            {{ item.title }}
          </v-subheader>
          <div class="d-flex justify-center">
            <v-icon class="primary--text font-3xl mr-2">
              {{ item.icon }}
            </v-icon>
            <p class="lightInfo--text font-4xl">
              {{ item.value }}
              <span class="font-s"> {{ item.unit }} </span>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="darkInfo rounded px-8 py-10 h-100">
          <h2 class="font-text lightInfo--text font-m text-uppercase mb-4">
            Top Albums
          </h2>
          <TopAlbumsTable></TopAlbumsTable>
        </div>
      </v-col>
      <v-col>
        <div class="darkInfo rounded px-8 py-10">
          <h2 class="font-text lightInfo--text font-m text-uppercase mb-4">
            Top Genres
          </h2>
          <TopGenres></TopGenres>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import d3 from "d3";
// import c3 from "c3";
// import Vue from "vue";
// import VueC3 from "vue-c3";
// import "c3/c3.min.css";
// import TotalProfitAndOrdersVue from "./overview/TotalProfitAndOrders.vue";

// import d3 from "d3";
// import * as d3 from "d3";
// import * as c3 from "c3";
import TotalProfit from "@/pages/dashboard/overview/TotalProfit.vue";
import TotalOrder from "@/pages/dashboard/overview/TotalOrder.vue";
import TopAlbumsTable from "@/pages/dashboard/overview/TopAlbumsTable.vue";
import TopGenres from "@/pages/dashboard/overview/TopGenres.vue";

export default {
  components: {
    TotalProfit,
    TotalOrder,
    TopAlbumsTable,
    TopGenres,
  },
  data() {
    return {
      tab: null,
      radioGroup: 1,
      totalCount: [
        {
          title: "Total Profit",
          value: 70000,
          unit: "HKD",
          icon: "mdi-cash",
        },
        {
          title: "Total Orders",
          value: 320,
          unit: "Orders",
          icon: "mdi-format-list-bulleted",
        },
        {
          title: "Total Albums Sold",
          value: 1200,
          unit: "Albums",
          icon: "mdi-album",
        },
      ],
    };
  },
  mounted() {
    // console.log(c3);
    // c3.generate({
    //   bindto: "#chart",
    //   data: {
    //     columns: [
    //       ["data1", 30, 200, 100, 400, 150, 250],
    //       ["data2", 50, 20, 10, 40, 15, 25],
    //     ],
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
// ::v-deep g.c3-chart {
//   g.c3-event-rects {
//     rect.c3-event-rect {
//       pointer-events: none;
//     }
//   }
// }

::v-deep .c3-tooltip td {
  color: $dark-info;
}
</style>
