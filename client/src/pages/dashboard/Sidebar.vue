<template>
  <v-navigation-drawer
    permanent
    height="100vh"
    width="100"
    mobile-breakpoint="0"
  >
    <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> play&pause </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider> -->
    <div>
      <v-list class="py-5">
        <v-list-item class="mb-10">
          <v-list-item-title>
            <h2 class="font-5xl">play&pause</h2>
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-subheader class="text-uppercase">For testing only</v-subheader>
        <v-list-item exact to="/admin/add-order">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase"
              >Add order</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <template v-slot:append>
      <div class="pa-5">
        <div class="mb-5">
          <v-avatar color="primary" size="30" class="mr-5">
            <span class="black--text">A</span>
          </v-avatar>
          <span>Alysa Chan</span>
        </div>
        <v-btn block outlined color="primary"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Overview", icon: "mdi-home", path: "/admin" },
        {
          title: "Orders",
          icon: "mdi-format-list-bulleted",
          path: "/admin/orders",
        },
        {
          title: "Products",
          icon: "mdi-shopping",
          path: "/admin/products",
        },
        {
          title: "Coupons",
          icon: "mdi-ticket-percent",
          path: "/admin/coupons",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  width: 240px !important;
  @media (min-width: 960px) {
    width: 240px !important;
  }
}
</style>
