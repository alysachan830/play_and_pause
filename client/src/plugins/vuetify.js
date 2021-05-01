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
        lightInfo: "#bdbdbd",
        darkInfo: "#262626",
        dark: "#121212",
      },
    },
  },
});
