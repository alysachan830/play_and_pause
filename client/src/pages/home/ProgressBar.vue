<template>
  <div class="d-flex d-lg-block align-start">
    <div class="progressBar pb-0 pb-lg-6 w-100 align-self-center">
      <div class="progressBar__bg"></div>
      <div
        class="progressBar__motion"
        :style="{ width: progressBarWidth + '%' }"
        ref="progressBarMotion"
      ></div>
    </div>
    <div
      class="slideNum primary--text text-nowrap ml-4 ml-lg-0 font-xs font-lg-m"
    >
      1 / 4
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "ProgressBar",
  data() {
    return {
      progressBarWidth: 0,
      autoplay: 2500,
      toggleRefresh: false,
      //   progressAnimation: setInterval(this.frame, this.autoplay/100)
    };
  },
  created() {
    this.$bus.$on("triggerAnimation", () => this.startAnimation());
  },
  // computed: mapGetters(["refreshStatus"]),
  methods: {
    startAnimation() {
      const vm = this;
      vm.progressBarWidth = 1;
      clearInterval(progressAnimation);
      console.log("cleared!");
      function frame() {
        if (vm.progressBarWidth >= 100) {
          vm.progressBarWidth = 100;
          // vm.$bus.$off("triggerAnimation", this.startAnimation);

          clearInterval(progressAnimation);
        } else {
          vm.progressBarWidth++;
        }
      }
      const progressAnimation = setInterval(frame, this.autoplay / 100);
      console.log("Progress bar animation starts!");
      //   const progressAnimation = setInterval(frame, this.autoplay / 100);
    },
    //   vm.progressBarWidth = 1;
    //   while (vm.progressBarWidth <= 100) {
    //     vm.progressBarWidth++;
    //   }
  },
  beforeDestroy() {
    this.$bus.$off("triggerAnimation", this.startAnimation);
  },
  mounted() {
    // this.$bus.$emit("triggerAnimation");
    // console.log(document.querySelector(".progressBar__motion").style.width);
    // console.log(this.$refs.progressBarMotion);
    // setInterval(this.frame, autoplay / 100);
  },
  watch: {
    // refreshStatus() {
    //   console.log("run");
    //   this.startAnimation();
    // },
  },
};
</script>
<style lang="scss">
@import "@/scss/variables.scss";
.progressBar {
  position: relative;
  &__bg {
    width: 100%;
    height: 2px;
    opacity: 0.3;
    background: $primary;
    position: absolute;
  }
  &__motion {
    // width: 10px;
    height: 2px;
    background: $primary;
    z-index: 2;
    position: absolute;
  }
}
</style>
