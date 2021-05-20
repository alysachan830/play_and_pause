<template>
  <div class="d-flex">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "@/pages/dashboard/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
