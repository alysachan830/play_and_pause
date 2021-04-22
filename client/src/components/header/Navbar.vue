<template>
  <div>
    <v-app-bar light app height="64" color="primary" elevate-on-scroll>
      <v-row class="align-center">
        <v-col>
          <v-btn icon class="hidden-lg-and-up" @click="searchBar = true">
            <v-icon color="dark">mdi-magnify</v-icon>
          </v-btn>
          <ul class="d-none d-lg-flex">
            <li>
              <a
                class="navbar-link d-block text-uppercase dark--text hover--underline"
                href="#"
                >log in</a
              >
            </li>
            <li class="pl-12">
              <a
                class="navbar-link d-block text-uppercase dark--text hover--underline"
                href="#"
                >github</a
              >
            </li>
            <li class="pl-12">
              <a
                class="navbar-link d-block text-uppercase dark--text hover--underline"
                href="#"
                >about us</a
              >
            </li>
          </ul>
        </v-col>
        <v-col class="text-center">
          <v-toolbar-title
            ><h1 class="font-2xl dark--text">
              <a href="#" class="text-uppercase dark--text">play&pause</a>
            </h1></v-toolbar-title
          >
        </v-col>
        <v-col>
          <ul class="d-flex align-center justify-end">
            <li class="hidden-md-and-down">
              <a
                href="#"
                class="navbar-link dark--text text-uppercase hover--underline"
                >shop</a
              >
            </li>
            <li class="pl-0 pl-lg-12 hidden-md-and-down">
              <v-btn icon @click="searchBar = true">
                <v-icon color="dark">mdi-magnify</v-icon>
              </v-btn>
            </li>
            <li class="pl-0 pl-lg-12">
              <v-btn icon color="dark" @click="cart = true">
                <v-icon>mdi-cart</v-icon>
                <span class="font-s">0</span>
              </v-btn>
            </li>
            <v-app-bar-nav-icon
              color="dark"
              class="hidden-lg-and-up"
              @click="drawer = true"
            ></v-app-bar-nav-icon>
          </ul>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app light temporary color="primary">
      <div id="nav-scrollbar">
        <div>
          <div class="d-flex justify-end px-5 pt-5">
            <v-icon x-large @click="drawer = false" color="dark"
              >mdi-close</v-icon
            >
          </div>
          <v-list nav flat>
            <v-list-item-group>
              <v-list-item class="hover--fade-out">
                <v-list-item-title
                  class="navbar-list-title text-uppercase font-9xl font-md-8xl"
                  >shop</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="hover--fade-out">
                <v-list-item-title
                  class="navbar-list-title text-uppercase font-9xl font-md-8xl"
                  >Log in</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="hover--fade-out">
                <v-list-item-title
                  class="navbar-list-title text-uppercase font-9xl font-md-8xl"
                  >About us</v-list-item-title
                >
              </v-list-item>
              <v-list-item class="hover--fade-out">
                <v-list-item-title
                  class="navbar-list-title text-uppercase font-9xl font-md-8xl"
                  >GitHub</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <div class="mx-5 mb-14">
          <h2 class="dark--text font-2xl">play&pause</h2>
          <span class="dark--text text-uppercase d-block mb-5 font-xxs"
            >Copyright © 2021, PLAY&PAUSE</span
          >
          <p class="dark--text">
            This website is only for learning purpose without any commercial
            use.
          </p>
        </div>
      </div>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="cart" app light temporary color="primary">
      <v-toolbar flat color="primary" class="cart-toolbar w-100">
        <div>
          <v-icon color="dark">mdi-cart</v-icon>
          <span>0</span>
        </div>
        <v-spacer></v-spacer>
        <v-icon @click="cart = false" color="dark">mdi-close</v-icon>
      </v-toolbar>
      <v-list subheader id="cart-scrollbar">
        <v-list-item-group>
          <template v-for="n in 10">
            <v-list-item class="align-stretch py-5" :key="n">
              <v-img
                class="mr-18"
                max-width="100px"
                src="images/Screenshot 2021-02-16 at 6.48.16 PM.png"
              ></v-img>

              <v-list-item-content
                class="align-self-auto align-content-space-between"
              >
                <v-list-item-title
                  class="d-flex justify-space-between align-start"
                  >When We All Fall Asleep, Where Do We Go?
                  <v-icon small> mdi-close</v-icon>
                </v-list-item-title>
                <div class="d-flex justify-space-between">
                  <v-list-item-subtitle>Qty: 2</v-list-item-subtitle>
                  <v-list-item-subtitle class="text-uppercase text-right"
                    >hkd 98.00</v-list-item-subtitle
                  >
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="n < 10" :key="n * 100"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
      <div style="height: 200px" class="px-5 d-flex align-center">
        <div class="w-100">
          <div class="dark--text d-flex justify-space-between mb-5">
            <span class="text-uppercase">Total</span>
            <span>HKD 196.00</span>
          </div>
          <v-btn outlined block color="dark">Check out</v-btn>
        </div>
      </div>
    </v-navigation-drawer>
    <v-expand-transition>
      <v-overlay v-if="searchBar" class="search-bar d-block">
        <div class="primary w-100 search-bar__wrap d-flex align-center">
          <v-container>
            <p class="text-uppercase dark--text font-xl">search</p>
            <v-text-field
              color="dark"
              light
              placeholder="Search album title or artist"
              append-outer-icon="mdi-send"
              @click:append-outer="search"
            >
            </v-text-field>
          </v-container>
        </div>

        <div class="search-bar--hide" @click="searchBar = false"></div>
      </v-overlay>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      cart: false,
      searchBar: false,
    };
  },
  methods: {
    search() {
      console.log("search!");
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/helpers/zindex.scss";
// .v-app-bar {
//   position: sticky;
// }

.v-app-bar.v-app-bar--fixed {
  z-index: get-z-index($elements, app-bar);
}

.v-navigation-drawer {
  width: 100% !important ;

  @include media-breakpoint-up(md) {
    width: 40% !important;
  }

  &--temporary {
    z-index: get-z-index($elements, nav-drawer--temporary) !important ;
  }
}

.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navbar-list-title {
  font-family: BigNoodleTitling, sans-serif;
}

.v-list-item__title {
  white-space: normal !important;
}

.v-toolbar__content,
.v-toolbar__extension {
  justify-content: center;
}

.navbar-link.hover--underline::after {
  background: #000000;
}

#nav-scrollbar {
  overflow-y: scroll;
}

#nav-scrollbar::-webkit-scrollbar {
  background: transparent;
}

#cart-scrollbar {
  overflow-y: scroll;
}

#cart-scrollbar {
  &::-webkit-scrollbar {
    // background: transparent;
    width: 8px;
    background-color: rgb(219, 219, 219, 0.8);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    // border: 2px solid #555555;
  }
}

.cart-toolbar {
  position: sticky;
  z-index: get-z-index($elements, cart-toolbar);
}

.search-bar {
  z-index: get-z-index($elements, search);

  &__wrap {
    top: 0;
    height: 300px;
    &--active {
      height: 300px;
    }

    &--close {
      height: 0;
    }
  }

  &--hide {
    height: calc(100vh - 300px);
  }
}

// .searchOpen {
//   // transform: translateX(0%) !important;
//   // transform: translate(0, -10%) !important;
// }

// .searchClose {
//   // transform: translateX(-100%) !important;
//   transform: translate(0, -10%) !important;
// }

// .cart-drawer::-webkit-scrollbar-thumb {
//   background: red;
// }
</style>
