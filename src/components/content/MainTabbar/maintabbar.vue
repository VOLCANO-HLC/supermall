<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="salmon">
      <img slot="icon-1" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="icon-2" src="~assets/img/tabbar/home_active.svg" alt="" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/class" activeColor="salmon">
      <img slot="icon-1" src="~assets/img/tabbar/category.svg" alt="" />
      <img slot="icon-2" src="~assets/img/tabbar/category_active.svg" alt="" />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="salmon">
      <img slot="icon-1" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img slot="icon-2" src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="icon-1" src="~assets/img/tabbar/profile.svg" alt="" />
      <img slot="icon-2" src="~assets/img/tabbar/profile_active.svg" alt="" />
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