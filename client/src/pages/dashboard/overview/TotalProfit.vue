<template>
  <div id="chart"></div>
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
      bindto: "#chart",
      data: {
        columns: [["data1", 2, 4, 1, 5, 2, 1]],
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

// export default {
//   components: {
//     VueC3,
//   },
//   data() {
//     return {
//       handler: new Vue(),
//     };
//   },
//   mounted() {
//     const options = {
//       data: {
//         columns: [["data1", 2, 4, 1, 5, 2, 1]],
//       },
//       color: {
//         pattern: ["#00FFCE"],
//       },
//     };
//     this.handler.$emit("init", options);
//   },
// };
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
}
</style>
