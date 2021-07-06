export default {
  addCount(state, product) {
    product.count += 1
  },
  addToCart(state, payLoad) {
    payLoad.checked = false
    state.cartList.push(payLoad)
  }
}