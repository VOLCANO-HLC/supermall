<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="showImage" alt="" @load="imgload" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      if (this.goodsItem.image) return this.goodsItem.image;
      else if (this.goodsItem.show) return this.goodsItem.show.img;
      return this.goodsItem.img;
      // console.log(this.goodsItem);
      // return this.goodsItem.img;
      // return (
      //   this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img
      // );
      // return this.goodsItem.img;
      // return (
      //   this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img
      // );
    },
  },
  methods: {
    imgload() {
      // console.log("图片加载完成");
      this.$bus.$emit("itemIamgeLoad");
      this.$emit("iamgeLoad");
    },
    itemClick() {
      console.log("跳转到详情页");
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style>
.goodsItem {
  width: 48%;
  height: 350px;
  float: left;
  margin: 3px;
  font-size: 10px;
  text-align: center;
  overflow: hidden;
}
.goodsItem img {
  width: 200px;
}
.goodsItem p {
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.price {
  color: var(--color-high-text);
  padding: 0px 20px;
  margin-left: -100px;
}
.cfav {
  display: inline;
  padding-left: 59px;
  margin-right: -68px;

  /* background: url("~assets/img/common/collect.svg") 0px 0/14px 14px; */
}
.cfav::before {
  content: " # ";
  color: rgba(100, 100, 100, 0);
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>