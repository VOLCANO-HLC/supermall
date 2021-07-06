<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.info-title {
  margin-top: 5px;
  font-size: 16px;
  font-weight: bolder;
  color: black;
}
.info-price {
  margin-top: 10px;
  position: relative;
}
.n-price {
  font-size: 30px;
  color: var(--color-high-text);
}
.o-price {
  text-decoration: line-through;
  margin-left: 20px;
}
.discount {
  position: absolute;
  top: 7px;
  display: inline-block;
  width: 40px;
  line-height: 20px;
  text-align: center;
  color: white;
  background-color: tomato;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 5px;
}
.info-other {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: flex;
  border-bottom: solid 1px #aaa;
}
.info-other span {
  color: #aaa;
  flex: 1;
}
.info-service {
  display: flex;
}
.info-service-item {
  flex: 1;
  position: relative;
  margin-bottom: 20px;
}
.info-service-item img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  position: absolute;
  top: -7px;
  /* padding-top: 5px; */
}
.info-service-item span {
  margin-left: 25px;
}
</style>