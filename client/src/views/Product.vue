<template>
  <div>
    <Navbar></Navbar>
    <v-container class="pt-24">
      <v-btn text plain class="mb-16 mb-md-24">
        <v-icon size="18" class="mr-2">mdi-chevron-left</v-icon>
        Back to shop</v-btn
      >
      <v-row class="mb-24 mb-md-28">
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="10">
              <v-img
                class="album-img"
                src="images/Screenshot 2021-02-16 at 6.48.16 PM.png"
                width="640"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <h3
            class="product-title mb-5 font-text font-2xl font-weight-medium white--text"
          >
            When We All Fall Asleep, Where Do We Go?
          </h3>
          <h4 class="mb-14 font-text font-m white--text">Margo Price</h4>
          <h3 class="mb-14 font-text font-xl font-weight-medium white--text">
            HKD 148
          </h3>
          <v-row align="center" class="mb-18">
            <v-col cols="12" md="8">
              <v-select
                :items="Array.from(Array(10), (n, i) => i + 1)"
                label="Quantity"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn outlined block color="primary"> Add to cart</v-btn>
            </v-col>
          </v-row>
          <div class="d-flex align-center mb-8">
            <div class="mr-5">
              <p class="text-uppercase">Release date</p>
              <p>2020-01-01</p>
            </div>
            <v-chip small class="mr-3">Indie</v-chip>
            <v-btn icon href="#">
              <v-icon color="#1DB954">mdi-spotify</v-icon>
            </v-btn>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur odio inventore officia deleniti, autem fuga error odit
            corrupti recusandae non nesciunt qui. Labore odit repellat laborum
            inventore exercitationem, nam unde! Accusamus, temporibus amet vero
            consectetur quae libero. Alias voluptate dolor odit magnam minima ut
            quos totam facilis aliquam laborum vero quia eveniet ea, commodi
            sint aspernatur distinctio, officiis adipisci quaerat?
          </p>
        </v-col>
      </v-row>
      <v-data-table
        text
        class="mb-24 mb-md-28"
        :headers="headers"
        :items="album"
        mobile-breakpoint="0"
        disable-pagination
        disable-filtering
        disable-sort
        hide-default-footer
      >
        <template v-slot:item.preview="{ item }">
          <v-btn :href="item.preview" text plain>
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </template>
      </v-data-table>
      <v-row class="mb-24 mb-md-28">
        <v-col class="pt-0" cols="12" md="4">
          <h2 class="font-text font-2xl font-weight-medium white--text mb-14">
            Album reviews
          </h2>
          <v-img
            class="mb-5 hidden-sm-and-down"
            height="200"
            width="200"
            src="images/Screenshot 2021-02-16 at 6.48.16 PM.png"
          ></v-img>

          <div class="d-flex d-md-block justify-space-between align-center">
            <p class="font-6xl font-weight-medium mr-6 mr-md-0">3.8</p>
            <div>
              <v-rating
                readonly
                half-increments
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                background-color="white"
                color="white"
                length="5"
                size="24"
                :value="3.5"
                class="mb-3"
              ></v-rating>
              <p>Based on 3 customer reviews</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="8" class="album-review">
          <v-row
            v-for="(comment, index) in customerComment"
            :key="index"
            class="album-review__comment py-5"
          >
            <v-col cols="5">
              <p>{{ comment.name }}</p>
              <v-rating
                readonly
                half-increments
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                background-color="white"
                color="white"
                length="5"
                size="12"
                :value="comment.rating"
                class="mb-3"
              ></v-rating>
            </v-col>
            <v-col cols="7">
              <p>
                {{ comment.content }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="mb-24">
        <h2 class="font-text font-2xl font-weight-medium white--text mb-14">
          More from Morgo Price
        </h2>
        <div class="product-swiper-wrap">
          <SwiperNewReleases
            :perSlideNum="4"
            :id="1"
            :dataFromParent="albums"
            :autoPlay="false"
          ></SwiperNewReleases>
        </div>
      </div>
      <div class="mb-16 mb-md-24">
        <h2 class="font-text font-2xl font-weight-medium white--text mb-14">
          More indie albums
        </h2>
        <div class="product-swiper-wrap">
          <SwiperNewReleases
            :perSlideNum="4"
            :id="2"
            :dataFromParent="albums"
          ></SwiperNewReleases>
        </div>
      </div>
      <div class="text-center mb-16 mb-md-24">
        <v-btn text plain>
          <v-icon size="18" class="mr-2">mdi-chevron-left</v-icon>
          Back to shop</v-btn
        >
      </div>
    </v-container>
    <div id="aplayer"></div>
    <ToTopBtn class="product-toTopBtn"></ToTopBtn>
    <Footer></Footer>
  </div>
</template>

<script>
// import "../../node_modules/aplayer/dist/APlayer.min.css";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";

import Navbar from "@/components/header/Navbar";
import SwiperNewReleases from "@/pages/home/swiper/SwiperNewReleases";
import ToTopBtn from "@/components/common/ToTopBtn";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    Navbar,
    SwiperNewReleases,
    ToTopBtn,
    Footer,
  },
  data() {
    return {
      headers: [
        { text: "#", value: "order" },
        { text: "title", value: "title", class: "text-uppercase" },
        {
          text: "duration",
          value: "duration",
          class: "text-uppercase",
        },
        { text: "preview", value: "preview", class: "text-uppercase" },
      ],
      album: [],
      albums: [],
      customerComment: [
        {
          name: "Alysa Chan",
          rating: 4,
          content:
            "Interesting mix of Pop and Jazz elements. Obviously the artist has developed a remarkable and mature artistic approach to music over the years without being limited in one single genre. Highly recommend to Pop and Jazz music lovers.",
        },
        {
          name: "Katy Cheung",
          rating: 4.5,
          content: "Nice album with impressive album artwork design.",
        },
        {
          name: "Michael Lee",
          rating: 3,
          content:
            "The vibes reminds me of the summer holiday I had in Seoul last year.",
        },
      ],
      ap: {},
    };
  },
  mounted() {
    this.axios.get(`http://127.0.0.1:8080/test.json`).then(res => {
      this.albums = res.data.albums.items;
    });
    for (let i = 0; i < 8; i++) {
      this.album.push({
        name: `Data ${i}`,
        title: `Demo title ${i + 1}`,
        order: i + 1,
        duration: "03:00",
        preview:
          "https://p.scdn.co/mp3-preview/bf9e33b1bb53c281c5eea0da6c317f2cd7c3eb58?cid=774b29d4f13844c495f206cafdad9c86",
      });
    }
    this.ap = new APlayer({
      container: document.getElementById("aplayer"),
      // fixed: true,
      theme: "#00FFCE",
      audio: [
        {
          name: "name",
          artist: "artist",
          url:
            "https://p.scdn.co/mp3-preview/bf9e33b1bb53c281c5eea0da6c317f2cd7c3eb58?cid=774b29d4f13844c495f206cafdad9c86",
          cover: "images/Screenshot 2021-02-16 at 6.48.16 PM.png",
        },
      ],
    });
  },
};
</script>

<style lang="scss">
@import "@/scss/helpers/zindex.scss";

.album-img {
  margin: 0 auto;
}

.product-title {
  line-height: 1.5;
}

.theme--dark.v-data-table {
  background-color: transparent !important ;
}

.v-data-table > .v-data-table__wrapper tbody tr:first-child:hover td {
  &:first-child {
    border-top-left-radius: 0 !important;
  }
  &:last-child {
    border-top-right-radius: 0 !important;
  }
}

.v-data-table > .v-data-table__wrapper tbody tr:last-child:hover td {
  &:first-child {
    border-bottom-left-radius: 0 !important;
  }
  &:last-child {
    border-bottom-right-radius: 0 !important;
  }
}

.v-rating .v-icon {
  padding: 0 !important;
  padding-right: 10px !important;
}

.album-review {
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: $dark-info;

  &__comment {
    @extend .album-review;
    border-width: 0 0 1px 0;
  }
}

.product-swiper-wrap {
  overflow-x: hidden;
}

.aplayer {
  position: sticky;
  bottom: 0;
  z-index: get-z-index($elements, music-player);
}

.aplayer-body {
  background: $dark-info !important;
}

// .aplayer.aplayer-fixed {
//   z-index: get-z-index($elements, music-player) !important;
// }

// .aplayer.aplayer-fixed .aplayer-body {
//   max-width: 100% !important;
//   width: auto !important;
//   background: $dark-info !important;
// }

// .aplayer.aplayer-fixed .aplayer-info {
//   border-top: 1px solid transparent !important;
// }

.product-toTopBtn {
  &.v-btn--fixed.v-btn--bottom {
    bottom: 90px !important;
  }

  &.v-btn--fixed.v-btn--right {
    right: 36px !important;
  }
}
</style>
