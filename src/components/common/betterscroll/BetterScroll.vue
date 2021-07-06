<template>
  <div class="wrapper-scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "betterscroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: 111,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper-scroll", {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // observeImage: true,
    });
    this.scroll.scrollTo(0, 0);
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载");
      this.$emit("pullingUp");
    });
    console.log(this.scroll);
    // this.scroll.refresh();
    // this.scroll.scrollerHeight = 10000;
  },
  methods: {
    scrollToto(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("-----");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>