<template>
  <div class="black">
    <!-- <Navbar></Navbar> -->
    <!-- <div class="home" style="height: 2000px;" id="home">
    </div> -->
    <div class="bg-img-wrap">
      <v-row>
        <v-container class="title-wrap d-flex justify-center flex-column">
          <h2 class="title-wrap__title primary--text">PLAY &</h2>
          <h2 class="title-wrap__title primary--text text-right">PAUSE</h2>
        </v-container>
        <v-col class="bg-img-1"></v-col>
        <v-col class="bg-img-2"></v-col>
      </v-row>
    </div>
    <p class="white--text font-md-xxs pa-29">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore quam
      exercitationem aliquid illum voluptate sequi ullam laboriosam, corporis ex
      earum non. Quas labore, distinctio est praesentium consequatur mollitia
      beatae. Reprehenderit hic laboriosam provident porro nemo voluptatibus.
      Officia ea ut excepturi quo perferendis, pariatur distinctio vero deleniti
      ipsum, quae quam corrupti atque! Amet, dolores natus nulla sequi
      cupiditate sapiente temporibus. Non incidunt magni maiores reprehenderit.
      Laudantium maxime, sint ullam quis obcaecati quam et maiores doloremque
      nobis excepturi molestiae doloribus, illo dolor, provident quia eum beatae
      neque atque quasi illum. Repellat? Perferendis perspiciatis doloremque,
      aut laudantium culpa facere enim et nisi ipsum aliquid quae sapiente dicta
      iusto illum minima. Dolor aperiam hic natus molestiae doloribus, quidem
      laudantium est labore unde atque! Vero necessitatibus molestiae non? Et
      sapiente commodi, labore at placeat aut magnam. Nihil quod deleniti
      repudiandae minima voluptatum, et impedit consequuntur velit
      reprehenderit, provident voluptatem non repellat, rem numquam. Eveniet?
      Cum voluptas voluptates voluptatum quo at optio quae eos nihil aut itaque
      facere eligendi maiores totam, autem commodi praesentium debitis neque
      quis dolores alias, reiciendis quisquam tempora. Assumenda, hic est.
      Dolorem quo quod eum quam eligendi modi est ipsam ducimus atque, possimus
      unde labore cupiditate voluptas a officiis nostrum magnam sequi assumenda
      neque fugit, architecto recusandae praesentium, mollitia maiores. Sint.
      Sit, adipisci. Voluptatem corporis atque culpa dolorem iusto sit
      perferendis mollitia illum reiciendis vero nam non necessitatibus
      cupiditate, velit commodi aspernatur sequi in nesciunt voluptates,
      deserunt vel unde cumque ipsum? Ea vitae nesciunt ut ratione odit harum
      voluptas odio ipsa recusandae consectetur ducimus rerum autem suscipit eum
      reprehenderit, minus maiores placeat quisquam facilis voluptatem dolor
      iusto veritatis facere. Minima, fugiat! Facere laboriosam eveniet natus
      placeat quia quis sint, eligendi doloremque, et unde quos quisquam
      perferendis, quasi cupiditate voluptatem. Dolores deleniti temporibus
      laudantium nihil natus dolore dolorem inventore dicta commodi expedita?
    </p>
    <img v-if="data.length > 1" :src="data[0].images[0].url" alt="" />
    <h3 class="primary--text text-uppercase">album of the month</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import axios from "axios";
// http://127.0.0.1:8080/test.json
export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8080/test.json`)
      .then(res => (this.data = res.data.albums.items));
  }
};
</script>

<style lang="scss">
.title-wrap {
  // z-index: 1;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  &__title {
    font-size: 464px;
    // font-weight: normal;
    line-height: 1;
  }
}

.bg-img-wrap {
  // height: 100vh;
  height: calc(100vh + 64px);
  width: 100%;
  position: relative;
  // position: absolute;
}
.bg-img-1 {
  background: url("/images/bnw-kobu-agency-3hWg9QKl5k8-unsplash.jpg")
    center/cover no-repeat;
  height: calc(100vh + 64px);
}
.bg-img-2 {
  background: url("/images/BnW_logan-weaver-IgVtUeeZOvY-unsplash.png")
    center/cover no-repeat;
  height: calc(100vh + 64px);
}
</style>
