<template>
  <div class="cart-list">
    <better-scroll class="cart-content" :pullUpLoad="true" ref="scroll">
      <cart-list-item
        v-for="(item, index) in getCartList"
        :key="index"
        :itemInfo="item"
      />
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import cartListItem from "./cartListItem";
export default {
  name: "cartList",
  components: {
    BetterScroll,
    cartListItem,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
    getCartList() {
      return this.$store.state.cartList;
    },
  },
  mounted() {},
  activated() {
    console.log(this.$refs.scroll.scroll);
    this.$refs.scroll.refresh();
  },
  methods: {
    cartScroll(position) {},
  },
};
</script>

<style>
.cart-list {
  height: calc(100% - 40px - 43px - 40px);
}
.cart-content {
  height: 100%;
  overflow: hidden;
}
</style>