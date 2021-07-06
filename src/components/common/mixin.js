import { debounce } from './utils'
export const itemImgMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    let newRefresh = new debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh
    }
    this.$bus.$on('itemIamgeLoad', this.itemImgListener)
    console.log('我是混入的内容');
  }
}