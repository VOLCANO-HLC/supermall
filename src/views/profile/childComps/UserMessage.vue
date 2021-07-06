<template>
  <div class="user-message">
    <div class="message">
      <h3>{{ userInfo.money.toFixed(2) }}</h3>
      <p>余额</p>
    </div>
    <div class="message">
      <h3>{{ userInfo.coupons }}</h3>
      <p>优惠劵</p>
    </div>
    <div class="message">
      <h3>{{ userInfo.score }}</h3>
      <p>积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermessage",
  data() {
    return {
      userInfo: {
        money: 100,
        coupons: 0,
        score: 10,
      },
    };
  },
};
</script>

<style>
.user-message {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 15px #ddd solid;
}
.user-message .message {
  padding: 20px 0;

  text-align: center;
  flex: 1;
  border-right: 1px #eee solid;
}
.message h3 {
  font-weight: bolder;
  color: tomato;
  font-size: 20px;
  margin-bottom: 5px;
}
</style>