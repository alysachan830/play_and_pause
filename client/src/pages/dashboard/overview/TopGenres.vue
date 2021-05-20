<template>
  <div id="chart1"></div>
</template>

<script>
import * as c3 from "c3";

export default {
  mounted() {
    c3.generate({
      bindto: "#chart1",
      data: {
        columns: [
          ["Pop", 10],
          ["Indie", 20],
          ["Jazz", 5],
          ["Rock", 4],
          ["Dance / Electronic", 5],
          ["Hip-hop", 5],
          ["R&B", 8],
        ],
        type: "donut",
      },
      donut: {
        title: "Genres",
      },
      color: {
        pattern: [
          "#00FFCE",
          "#C9E4CA",
          "#87BBA2",
          "#55828B",
          "#3B6064",
          "#364958",
          "#ced0ce",
        ],
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~c3/c3.min.css";
::v-deep {
  .c3-chart-arc {
    text {
      fill: $dark-info;
    }
    path {
      stroke: none;
    }
  }
  .c3-chart-arcs-title {
    fill: $light-info;
  }
  .c3-legend-item {
    fill: $light-info;
  }
}
</style>
