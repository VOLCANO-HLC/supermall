<template>
  <div class="cart-bottom">
    <div class="check-btn">
      <check-button
        class="btn"
        @checkBtnClick="checkedChange"
        v-model="isSellectAll"
      />
      <span>全选</span>
    </div>
    <div class="total">合计 ：{{ totalPrice }} 元</div>
    <div class="calculate" @click="calculate">去计算:({{ checkedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "cartbottombar",
  data() {
    return {
      checked: false,
    };
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥ " +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preV, item) => {
            return preV + item.price * item.count;
          }, 0)
      );
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSellectAll() {
      if (!this.$store.state.cartList.length) return false;
      // 1.过滤数组，找出没有勾选的对象，返回新数组的长度，0为全选（false），其他为有未选，返回true
      // return !(this.$store.state.cartList.filter((item) => {
      //   return !item.checked;
      // })).length

      // 2.find万能函数，找出一个没有勾选的即可，
      return !this.$store.state.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  methods: {
    checkedChange() {
      if (this.isSellectAll) {
        //全选中时点击
        this.$store.state.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        //未全选时点击
        this.$store.state.cartList.forEach((item) => {
          item.checked = true;
        });
      }
      console.log("---");
    },
    calculate() {
      if (!this.checkedLength) {
        this.$toast.isShow("请选择商品");
      }
    },
  },
};
</script>

<style>
.cart-bottom {
  height: 40px;
  display: flex;
  background-color: rgb(185, 166, 173);
  position: relative;
  justify-content: space-between;
  text-align: center;
}
.cart-bottom .check-btn {
  width: 80px;
  text-align: center;
  display: flex;
  align-items: center;
}
.check-btn .btn {
  margin: auto 8px;
}
.check-btn span {
  line-height: 40px;
}
.cart-bottom .total {
  margin-left: 10px;

  flex: 1;
  line-height: 40px;
  color: aliceblue;
}
.calculate {
  margin-left: 10px;
  line-height: 40px;
  width: 100px;
  background-color: tomato;
  color: aliceblue;
}
</style>