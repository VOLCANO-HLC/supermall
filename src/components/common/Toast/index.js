import Toast from './Toast.vue'

const obj = {}
obj.install = function (Vue) {
  console.log('toast.install');

  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2.通过new的方式，使用组件构造器，创建一个新的组件对象
  const toast = new toastContrustor()

  // 3.将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // 4.将组件挂载的$el--div 添加在document上
  document.body.appendChild(toast.$el)


  // Vue.prototype.$toast=对象；
  Vue.prototype.$toast = toast;
}
export default obj