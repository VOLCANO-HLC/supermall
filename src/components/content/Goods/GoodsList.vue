<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
      @iamgeLoad="iamgeLoad"
    />
  </div>
</template>

<script>
import GoodsListItem from "components/content/Goods/GoodsListItem.vue";

export default {
  name: "goodslist",
  components: {
    GoodsListItem,
  },
  data() {
    return {
      num: 0,
    };
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    iamgeLoad() {
      this.num += 1;
      if (this.num === this.goods.length) this.$emit("imageLoad");
    },
  },
};
</script>

<style>
</style>