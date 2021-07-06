<template>
  <div class="user-menu-first">
    <div class="menu-item">
      <img src="~assets/img/profile/dingdan.png" alt="" /><span>我的订单</span>
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/message.svg" alt="" /><span>我的消息</span>
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/cart.svg" alt="" /><span>我的购物车</span>
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/shopping.svg" alt="" /><span>积分商城</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user-menu-first {
  border-bottom: 10px #eee solid;
}
.menu-item {
  position: relative;
  font-size: 16px;
  margin: 10px 0;
  display: flex;
}
.menu-item img {
  position: absolute;
  width: 25px;
  height: 25px;
  color: salmon;
  top: 5px;
}
.menu-item span {
  padding: 10px 0;
  flex: 1;
  margin-left: 32px;
  border-bottom: 1px #ccc solid;
  display: inline-block;
}
</style>