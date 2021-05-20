<template>
  <v-data-table
    :headers="headers"
    :items="albums"
    disable-sort
    disable-pagination
    hide-default-footer
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "#",
          value: "index",
        },
        {
          text: "Title",
          value: "title",
          class: "text-uppercase",
        },
        {
          text: "Artist",
          value: "artist",
          class: "text-uppercase",
        },
      ],
      albums: [
        {
          index: 1,
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
        },
        {
          index: 1,
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
        },
        {
          index: 1,
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
        },
        {
          index: 1,
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
        },
        {
          index: 1,
          title: "When We All Fall Asleep, Where Do We Go?",
          artist: "Billie Eilish",
        },
      ],
    };
  },
};
</script>

<style></style>
