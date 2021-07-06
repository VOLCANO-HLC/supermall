<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tabc"
      :class="{ tabFixed: isTabFixe }"
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @goodsList="getTitle"
      v-show="isTabFixe"
    ></tab-control>
    <better-scroll
      class="wrapper"
      ref="scroll"
      :probe-type="probeType"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swipperImageLoad="swipperImageLoad"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <fearure-view></fearure-view>
      <tab-control
        :class="{ tabFixed: isTabFixe }"
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @goodsList="getTitle"
      ></tab-control>
      <goods-list :goods="goodsList"></goods-list>
      <ul class="tryUl">
        <li>1</li>
      </ul>
    </better-scroll>
    <back-top @click.native="bcakTop" v-show="btShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import FearureView from "./childrenComps/FearureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/Goods/GoodsList.vue";
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";
import { debounce } from "components/common/utils.js";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FearureView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop,
  },
  data() {
    return {
      btShow: false,
      probeType: 3,
      result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsList: null,
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixe: false,
      scaleY: 0,
    };
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 100);
    // this.$bus.$on("itemIamgeLoad", () => {
    //   refresh();
    // });
  },
  methods: {
    loadMore() {
      console.log("上拉加载");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
      console.log(this.$refs.scroll.scroll);
    },
    contentScroll(position) {
      // console.log(position);
      // backtop显示
      if (position.y < -600) this.btShow = true;
      else this.btShow = false;
      // tabcontrol吸顶
      this.isTabFixe = -position.y > this.tabOffsetTop;
    },
    bcakTop() {
      console.log("hhh111");
      console.log(this.$refs.scroll.message);
      this.$refs.scroll.scrollToto(0, 0, 1000);
    },
    getTitle(item, index) {
      if (item.indexOf("流行") != -1) {
        this.goodsList = this.goods["pop"].list;
        this.currentType = "pop";
        console.log(item);
      } else if (item == "精选") {
        this.goodsList = this.goods["sell"].list;
        this.currentType = "sell";
        console.log(item);
      } else {
        this.goodsList = this.goods["new"].list;
        this.currentType = "new";
        console.log(item);
      }
      this.$refs.tabControl2.num = index;
      this.$refs.tabControl1.num = index;
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        // this.result=res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.refresh();
      });
    },
    swipperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

      // console.log(this.$refs.tabControl.$el.offsetTop);

      console.log(this.$refs.tabControl2.$el.offsetTop);
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.goodsList = this.goods["pop"].list;
    // this.$refs.scroll.refresh();
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    console.log("activated");
    this.$refs.scroll.scrollToto(0, this.scaleY, 0);
  },
  deactivated() {
    console.log("deactivated");
    this.scaleY = this.$refs.scroll.scroll.y;
    console.log(this.$refs.scroll.scroll.y);
  },
};
</script>

<style>
.home {
  /* padding-top: 44px; */
  /* height: 100vh; */
  position: relative;
}
.tabc {
  position: relative;
  z-index: 5;
}
.tabFixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.home-nav {
  background-color: salmon;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.wrapper {
  /* height: calc(100% - 93px);
  overflow: hidden; */
  /* margin-top: 44px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>