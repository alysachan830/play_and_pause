<template>
  <div>
    <v-img
      src="/images/bnw_logan-weaver-IgVtUeeZOvY-unsplash.jpg"
      height="100vh"
      class="admin-banner"
    ></v-img>
    <v-container>
      <v-row align="center" class="justify-center justify-md-start admin-input">
        <!-- <v-col cols="6"></v-col> -->
        <v-col cols="8" md="6" class="offset-md-6">
          <v-row>
            <v-col cols="12" md="8" class="admin-input__form offset-md-3">
              <h2 class="font-8xl mb-14">Admin login</h2>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  label="Username"
                  v-model="username"
                  :rules="usernameRules"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                  :rules="passwordRules"
                  outlined
                  required
                ></v-text-field>
                <div class="text-right">
                  <v-btn type="submit" :disabled="!valid">sign in</v-btn>
                </div>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      valid: true,
      usernameRules: [v => !!v || "Username is required"],
      passwordRules: [v => !!v || "Password is required"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/helpers/zindex.scss";

.admin-banner {
  position: absolute;
  width: 100%;
  filter: brightness(30%);

  @include media-breakpoint-up(md) {
    width: 50%;
    filter: brightness(100%);
  }
}

.admin-input {
  height: 100vh;
  &__form {
    z-index: get-z-index($elements, admin-input);
  }
}
</style>
