<template>
  <div
    class="d-flex justify-lg-space-between align-center pa-md-9 pa-6"
    :class="[parent ? 'primary--text' : 'dark--text primary']"
  >
    <div
      class="w-100 w-lg-auto d-flex align-center justify-space-between justify-lg-start"
    >
      <div>
        <h2
          class="font-xl font-md-3xl"
          :class="[parent ? 'primary--text' : 'dark--text']"
        >
          play&pause
        </h2>
        <span class="font-xxs">Copyright © 2021, PLAY&PAUSE</span>
      </div>
      <span class="font-xs ml-lg-28"
        >This website is only for learning purpose <br />
        without any commercial use.</span
      >
    </div>
    <ul class="d-none d-lg-flex">
      <li class="mr-20">
        <a
          href="#"
          class="hover--fade-out font-l text-uppercase"
          :class="[parent ? 'primary--text' : 'dark--text']"
          >Log in</a
        >
      </li>
      <li class="mr-20">
        <a
          href="#"
          class="hover--fade-out font-l text-uppercase"
          :class="[parent ? 'primary--text' : 'dark--text']"
          >Shop</a
        >
      </li>
      <li class="mr-20">
        <a
          href="#"
          class="hover--fade-out font-l text-uppercase"
          :class="[parent ? 'primary--text' : 'dark--text']"
          >About us</a
        >
      </li>
      <li>
        <a
          href="#"
          class="hover--fade-out font-l text-uppercase"
          :class="[parent ? 'primary--text' : 'dark--text']"
          >Github</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    parent: String, //根據父元件來決定Navbar是否要有primary底色
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.parent);
  },
};
</script>
