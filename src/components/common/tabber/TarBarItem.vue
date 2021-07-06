<template>
  <div id="tar-bar-item" @click="itemClick">
    <div v-show="!isShow">
      <slot name="icon-1"></slot>
    </div>
    <div v-show="isShow">
      <slot name="icon-2"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isShow: true,
    };
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isShow ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // console.log(11);
      if (this.$route.path == this.path) return true;
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
#tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
#tar-bar-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>