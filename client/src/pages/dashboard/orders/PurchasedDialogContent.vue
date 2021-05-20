<template>
  <!-- <ul>
    <li v-for="item in itemList" :key="item.productId">
      {{ item.title }}
    </li>
  </ul> -->
  <v-data-table :headers="headers" :items="itemList" :items-per-page="5">
    <template v-slot:item.index="{ index }">
      <span>{{ index }}</span>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "#", value: "index" },
        { text: "id", value: "id" },
        { text: "title", value: "title" },
        { text: "artist", value: "artist" },
        { text: "original price", value: "originalPrice" },
        { text: "price", value: "price" },
        { text: "quantity", value: "quantity" },
        { text: "category", value: "category" },
        { text: "genre", value: "genre" },
        { text: "date", value: "date" },
        { text: "available", value: "available" },
      ],
    };
  },
  props: {
    itemList: Array,
  },
};
</script>

<style></style>
