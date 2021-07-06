<template>
  <div class="tabmenu">
    <div
      class="menu-item"
      v-for="(item, index) in classList"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currentIndex == index }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "tabmenu",
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    classList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      this.$emit("cateItem", index);
    },
  },
};
</script>

<style>
.tabmenu {
  background-color: #eee;
  font-size: 16px;
  text-align: center;
  width: 80px;
}
.menu-item {
  line-height: 30px;
  margin: 10px auto;
}
.tab-menu .active {
  color: var(--color-high-text);
  border-left: var(--color-high-text) 3px solid;
}
</style>