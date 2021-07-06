export default {
  addCartList(context, payLoad) {
    return new Promise((resolve, reject) => {
      let oldProduct = null

      // 万能函数
      let product = context.state.cartList.find(item => {
        oldProduct = item
        return item.iid === payLoad.iid
      })
      if (product) {//当前商品数量+1
        // oldProduct.count += 1
        context.commit('addCount', oldProduct)
        resolve('当前商品数量+1')
      } else {//加入购物车
        payLoad.count = 1
        // state.cartList.push(payLoad)
        context.commit('addToCart', payLoad)
        resolve('当前商品加入购物车')
      }
    })
  },
}