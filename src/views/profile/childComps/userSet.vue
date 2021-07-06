<template>
  <div class="user">
    <div class="user-ava">
      <div class="avat">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="user-login">
        <div><span>登录 </span><span>/ 注册</span></div>
        <div class="user-phone">
          <img src="~assets/img/profile/phone.svg" alt="" /><span
            >暂无绑定手机</span
          >
        </div>
      </div>
    </div>
    <div class="user-more">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user {
  /* margin-top: 60px; */
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
.user-ava {
  display: flex;
}
.user-ava .avat img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}
.user-login {
  margin-top: 25px;
  margin-left: 10px;
}
.user-phone {
  position: relative;
  margin-top: 10px;
  margin-left: -8px;
}
.user-phone img {
  position: absolute;
  top: -8px;
  /* padding-top: 5px; */
  width: 25px;
  height: 30px;
}
.user-phone span {
  margin-left: 22px;
  font-size: 10px;
}
.user-more img {
  margin-top: 30px;
  width: 25px;
  height: 30px;
}
</style>