import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shop from "../views/Shop.vue";
import Product from "../views/Product.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Overview from "../pages/dashboard/Overview.vue";
import Orders from "../pages/dashboard/Orders.vue";
import Products from "../pages/dashboard/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/shop/:productId",
    name: "Product",
    component: Product,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        name: "Overview",
        component: Overview,
        path: "",
      },
      {
        name: "Order",
        component: Orders,
        path: "orders",
      },
      {
        name: "Products",
        component: Products,
        path: "products",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
