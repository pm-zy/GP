//  引入 插件
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//  引入组件
import Vue from 'vue'
import App from './App'
// import Test from './views/test.vue';
const Test = {template: '<div>foo</div>'}
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
  //  注册插件
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/test',
      component: Test
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
// const router = new VueRouter() // 路由map
// router.map({
//   '/test': {
//     component: Test
//   }
// })

// router.redirect({
//   '*': '/test'
// })

// router.start(App, '#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
//   router
// })
