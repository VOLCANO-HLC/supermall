<template>
  <div class="shop-info">
    <div class="s-in-title">
      <span class="shop-logo">
        <img :src="shopInfo.logo" alt="" />
      </span>
      <span class="shop-name">{{ shopInfo.name }}</span>
      <span class="shop-fans">粉丝数</span>
      <span class="shop-fans-num">{{ shopInfo.fans }}</span>
    </div>
    <div class="s-in-other">
      <div class="in-other-l">
        <div class="other-l-l">
          <div class="l-top">{{ (shopInfo.sells / 10000).toFixed(1) }}万</div>
          <div class="l-bottom">总销量</div>
        </div>
        <div class="other-l-r">
          <div class="l-top">{{ shopInfo.goodsCount }}</div>
          <div class="l-bottom">全部宝贝</div>
        </div>
      </div>

      <div class="in-other-r">
        <div
          class="other-r-item"
          v-for="(item, index) in shopInfo.score"
          :key="index"
        >
          <div>
            <span class="other-t-words">{{ item.name }}</span>
          </div>
          <div>
            <span class="shop-score" :class="{ scoreHight: item.isBetter }">{{
              item.score
            }}</span>
          </div>
          <div v-if="item.isBetter"><span class="score-hight">高</span></div>
          <div v-if="!item.isBetter"><span class="score-low">低</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.shop-info {
  padding-bottom: 20px;
  margin: 20px 0px;
  border-top: solid 5px #ccc;
  border-bottom: solid 5px #ccc;
}
.s-in-title {
  margin: 20px 0px;
  position: relative;
}
.s-in-title img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 2px #ccc;
}
.shop-name {
  position: absolute;
  top: 40px;
  margin-left: 10px;
}
.shop-fans,
.shop-fans-num {
  position: absolute;
  top: 40px;
  left: 220px;
  margin-left: 10px;
}
.shop-fans-num {
  margin-left: 70px;
}

.s-in-other {
  display: flex;
}
.in-other-l,
.in-other-r {
  flex: 1;
}
.in-other-l {
  display: flex;
  border-right: solid 2px #ccc;
}
.other-l-l,
.other-l-r {
  flex: 1;
  text-align: center;
  font-weight: bolder;
  color: black;
}
.l-top {
  margin-top: 45px;
  margin-bottom: 10px;
}
.in-other-r {
  padding: 20px;
}
.other-r-item {
  display: flex;
  text-align: center;
  padding-left: 20px;
  font-size: 12px;
}
.other-r-item div {
  flex: 1;
  margin: 10px 0;
  color: black;
}
.other-r-item .shop-score {
  color: lawngreen;
}
.score-low {
  background-color: lawngreen;
  color: white;
}
.other-r-item .scoreHight {
  color: orangered;
}
.score-hight {
  display: inline-block;
  line-height: 14px;
  text-align: center;
  padding: 0 -10px;
  color: white;
  background-color: orangered;
}
</style>