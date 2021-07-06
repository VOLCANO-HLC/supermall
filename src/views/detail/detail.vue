<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>

    <better-scroll
      class="detail-content"
      :pullUpLoad="true"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
    >
      <!-- <div
        class="cartLiat"
        v-for="(item, index) in $store.state.cartList"
        :key="index"
      >
        {{ item }}
      </div> -->
      <detail-swipper :topIamges="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @goodsInfoLoad="goodsInfoLoad"
      />
      <detail-param-info :paramInfo="goodsParam" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list
        class="de-re-list"
        :goods="recommends"
        @load="recommendLoad"
        ref="recommend"
      />
    </better-scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="bcakTop" v-show="btShow"></back-top>
    <toast class="detail-toast" :message="message" :show="isShow" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwipper from "./childComps/DetailSwipper";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/Goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backtop/BackTop.vue";
import Toast from "components/common/Toast/Toast.vue";
import { itemImgMixin } from "components/common/mixin.js";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],

      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      themTopYs: [],
      btShow: false,
      isShow: false,
      message: "",
    };
  },
  mixins: [itemImgMixin],
  components: {
    DetailNavBar,
    DetailSwipper,
    DetailBaseInfo,
    DetailShopInfo,
    BetterScroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast,
  },
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    getDetail(this.iid).then((res) => {
      // console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺信息
      this.shop = new Shop(data.shopInfo);
      // 详情页
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);
      // 详情页的尺码和产地信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 这里，取不到值，因为dom还没加载出来
      // this.themTopYs = [];
      // this.themTopYs.push(0);
      // this.themTopYs.push(this.$refs.param.$el.offsetTop);
      // this.themTopYs.push(this.$refs.comment.$el.offsetTop);
      // this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themTopYs);
      this.$nextTick(() => {
        // 这里，虽然dom加载出来了，可以取到值，但是图片还没加载完成，所以值不准确
        this.themTopYs = [];
        this.themTopYs.push(0);
        this.themTopYs.push(this.$refs.param.$el.offsetTop);
        this.themTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themTopYs);
      });
    });
    // 获取推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
      console.log(this.recommends);
      this.$refs.scroll.refresh();
    });
  },
  mounted() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    // this.$bus.$on("itemIamgeLoad", () => {
    //   this.$refs.scroll.refresh();

    // });
  },
  updated() {
    // 这里，值也不准确，因为图片还没加载完成
    // this.themTopYs = [];
    // this.themTopYs.push(0);
    // this.themTopYs.push(this.$refs.param.$el.offsetTop);
    // this.themTopYs.push(this.$refs.comment.$el.offsetTop);
    // this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
    // console.log(this.themTopYs);
  },
  methods: {
    ...mapActions(["addCartList"]),
    goodsInfoLoad() {
      this.$refs.scroll.refresh();
      this.themTopYs = [];
      this.themTopYs.push(0);
      this.themTopYs.push(this.$refs.param.$el.offsetTop);
      this.themTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themTopYs);
    },
    recommendLoad() {
      this.$refs.scroll.refresh();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollToto(0, -this.themTopYs[index], 100);
      console.log(-this.themTopYs[index]);
    },
    contentScroll(position) {
      // console.log(position.y);
      // 获取滚动位置
      let positionY = -position.y;
      // 判断显示那个title
      // 判断位置在themTopYs的那个区间中，nav中的currentIndex就为哪个值
      this.$refs.nav.currentIndex =
        positionY >= this.themTopYs[3]
          ? 3
          : positionY >= this.themTopYs[2]
          ? 2
          : positionY >= this.themTopYs[1]
          ? 1
          : 0;

      // this.$refs.nav.currentIndex =
      //   positionY >= 0 && positionY < this.themTopYs[1]
      //     ? 0
      //     : positionY >= this.themTopYs[1] && positionY < this.themTopYs[2]
      //     ? 1
      //     : positionY >= this.themTopYs[2] && positionY < this.themTopYs[3]
      //     ? 2
      //     : 3;
      // console.log(this.$refs.nav.currentIndex);

      // 回到顶部的显示判断
      if (position.y < -600) this.btShow = true;
      else this.btShow = false;
    },
    bcakTop() {
      console.log("hhh111");
      console.log(this.$refs.scroll.message);
      this.$refs.scroll.scrollToto(0, 0, 1000);
    },

    // 点击加入购物车
    addCart() {
      console.log("加入购物车");
      const product = {};
      product.iamge = this.topImages[0];
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.title = this.goods.title;
      product.iid = this.iid;
      console.log(product);
      // this.$store.commit("addCartList", product);
      this.addCartList(product).then((res) => {
        // console.log(res);
        // toast悬浮窗显示--1
        // this.message = res;
        // this.isShow = true;
        // setTimeout(() => {
        //   this.isShow = false;
        // }, 1500);
        this.$toast.isShow(res, 1500);
      });

      // this.$store.dispatch("addCartList", product).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>

<style>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-content {
  position: relative;
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  z-index: 5;
  background-color: white;
}
.de-re-list::after {
  content: "1";
  font-size: 2px;
  color: white;
}
/* .cartLiat {
  position: relative;
  z-index: 100;
} */
</style>