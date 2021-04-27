<template>
  <!-- <v-container> -->
  <div>
    <v-tabs class="mb-18" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="n in 3" :key="n">
        <SwiperNewReleases
          :perSlideNum="3"
          :id="n"
          :dataFromParent="data"
          :autoPlay="true"
        ></SwiperNewReleases>
      </v-tab-item>
    </v-tabs-items>
  </div>
  <!-- </v-container> -->
</template>

<script>
import SwiperNewReleases from "./swiper/SwiperNewReleases";

export default {
  name: "NewReleases",
  props: {
    data: Array,
  },
  components: {
    SwiperNewReleases,
  },
  data() {
    return {
      tab: null,
      items: ["pop", "indie", "jazz"],
    };
  },
};
</script>
