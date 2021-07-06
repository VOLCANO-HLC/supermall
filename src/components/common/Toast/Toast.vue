<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    message: {
      type: String,
      default() {
        return "";
      },
    },
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    isShow(mes, delay = 2000) {
      this.message = mes;
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.message = "";
      }, delay);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.6);
  color: ghostwhite;
  z-index: 999;
}
</style>