<template>
  <div class="tabcon">
    <div
      v-for="(item, index) in titles"
      :key="index"
      @click="tabclick(index, item)"
      :class="{ active: index === num }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  data() {
    return {
      num: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabclick(index, item) {
      this.num = index;
      this.$emit("goodsList", item, index);
    },
  },
};
</script>

<style>
.tabcon {
  width: 100%;
  display: flex;
  /* background-color: antiquewhite; */
  text-align: center;
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.tabcon div {
  padding: 15px;
  flex: 1;
}
.tabcon div span {
  padding: 5px;
}
.tabcon .active span {
  border-bottom: 3px solid salmon;
  color: salmon;
}
</style>