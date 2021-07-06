<template>
  <div class="user-menu-second">
    <div class="menu-item">
      <img src="~assets/img/profile/shoucang.png" alt="" /><span>我的收藏</span>
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/huiyuan.png" alt="" /><span>会员福利</span>
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/youhuiquan.png" alt="" /><span
        >优惠领取</span
      >
    </div>
    <div class="menu-item">
      <img src="~assets/img/profile/shezhi.png" alt="" /><span>个人设置</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user-menu-second {
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