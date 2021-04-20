<template>
  <div class="recommond">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommond-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homerecommendview",
  props: {
    recommends: {
      type: Array,
      data() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommond {
  padding: 15px 0 30px 0;
  display: flex;
  font-size: 12px;
  width: 100%;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  border-bottom: 8px solid #eee;
}
.recommond-item {
  flex: 1;
}
.recommond-item img {
  widows: 65px;
  height: 65px;
}
.recommond-item div {
  margin-top: 10px;
}
</style>