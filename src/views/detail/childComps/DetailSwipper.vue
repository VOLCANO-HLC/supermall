<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topIamges" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  props: {
    topIamges: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
.detail-swiper {
  height: 500px;
}
.detail-swiper img {
  height: auto;
  /* overflow: hidden; */
}
</style>