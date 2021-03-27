import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#00FFCE"
      }
    }
  }
});

// export default new Vuetify({
//   // icons: {
//   //   iconfont: "mdi"
//   // },
//   // theme: {
//   //   themes: {
//   //     light: {
//   //       primary: "#00FFCE"
//   //     }
//   //   }
//   // },
//   customVariables: ["@/scss/variables.scss"],
//   treeShake: true,
//   options: {
//     customProperties: true
//   }
// });
