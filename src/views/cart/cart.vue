<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childCompns/cartList";
import CartBottomBar from "./childCompns/CartBottomBar";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
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
  methods: {
    cartScroll(position) {},
  },
};
</script>

<style>
.cart {
  height: 100vh;
}
.cart-nav {
  background-color: salmon;
  color: aliceblue;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */

  text-align: center;
}
</style>