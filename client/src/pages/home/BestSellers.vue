<template>
  <div>
    <v-tabs class="mb-18" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" v-if="data.length > 1">
      <v-tab-item v-for="n in 3" :key="n">
        <v-row>
          <v-col
            cols="6"
            lg="3"
            v-for="album in data.slice((n - 1) * 8, (n - 1) * 8 + 8)"
            :key="album.name"
          >
            <a href="#">
              <v-img
                :src="album.images[0].url"
                class="mb-4 hover__filter--darken"
              ></v-img>
              <p>{{ album.name }}</p>
            </a>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "BestSellers",
  components: {},
  props: {
    data: Array,
  },
  data() {
    return {
      tab: null,
      items: ["pop", "indie", "jazz"],
    };
  },
  mounted() {
    console.log(this.data.length);
  },
};
</script>
