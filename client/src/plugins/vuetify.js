import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#00FFCE",
        info: colors.grey.darken1,
        lightInfo: "#e0e0e0",
        darkInfo: "#424242",
        dark: "#121212",
      },
    },
  },
});
