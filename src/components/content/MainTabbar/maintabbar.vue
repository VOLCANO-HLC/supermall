<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="yellow">
      <img slot="icon-1" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <img slot="icon-2" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/class" activeColor="green">
      <img slot="icon-1" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <img slot="icon-2" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="icon-1" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <img slot="icon-2" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon-1" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <img slot="icon-2" src="~assets/img/home/recommend_bg.jpg" alt="" />
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>


<script>
import TabBar from "../../common/tabber/TabBar";
import TabBarItem from "../../common/tabber/TarBarItem";

export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>