<template>
  <div class="class-sub">
    <div class="sub-item" v-for="(item, index) in subList" :key="index">
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classSub",
  props: {
    subList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.class-sub {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.sub-item {
  margin: 7px;
}
.sub-item img {
  width: 60px;
  flex: 1;
}
</style>