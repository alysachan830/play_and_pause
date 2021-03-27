module.exports = {
  transpileDependencies: ["vuetify"]
};
// module.exports = {
//   configureWebpack: {
//     // Configuration applied to all builds
//   },
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "~@/scss/variables.scss"` // change the route with you main.scss location in yout proyect
//       }
//     }
//   },
//   chainWebpack: config => {
//     ["vue-modules", "vue", "normal-modules", "normal"].forEach(match => {
//       config.module
//         .rule("scss")
//         .oneOf(match)
//         .use("sass-loader")
//         .tap(opt =>
//           Object.assign(opt, { data: `@import '~@/scss/variables.scss';` })
//         );
//     });
//   }
// };
