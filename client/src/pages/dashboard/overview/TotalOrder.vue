<template>
  <div id="chart2"></div>
</template>

<script>
import * as c3 from "c3";

export default {
  // mounted() {
  //   const options = {
  //     data: {
  //       columns: [["data1", 4, 2, 0, 3, 1, 1]],
  //     },
  //     color: {
  //       pattern: ["#00FFCE"],
  //     },
  //   };
  //   this.handler.$emit("init", options);
  // },
  mounted() {
    c3.generate({
      bindto: "#chart2",
      data: {
        columns: [["data1", 4, 2, 0, 3, 1, 1]],
      },
      // grid: {
      //   y: {
      //     show: true,
      //   },
      // },
      color: {
        pattern: ["#00FFCE"],
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~c3/c3.min.css";

::v-deep {
  .c3-axis-y text,
  .c3-axis-x text {
    fill: #bdbdbd;
  }

  .c3-axis-x path,
  .c3-axis-y path,
  .c3-axis-x line,
  .c3-axis-y line {
    stroke: #bdbdbd;
  }

  .c3-legend-item {
    fill: #bdbdbd;
  }

  // .c3-ygrid-line line {
  //   stroke: red;
  // }
}

// ::v-deep .c3-axis-y text,
// ::v-deep .c3-axis-x text {
//   fill: #fff;
// }

// ::v-deep .c3-axis-x path,
// ::v-deep .c3-axis-y path,
// ::v-deep .c3-axis-x line,
// ::v-deep .c3-axis-y line {
//   stroke: #fff;
// }

// ::v-deep .c3-legend-item-event {
//   color: #fff;
// }

// c3-target-Tablet text {
//   fill: black;
// }

// ::v-deep .c3-axis-x text {
//   fill: #fff;
// }
</style>
