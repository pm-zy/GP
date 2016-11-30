//引入 插件
import VueRouter from 'vue-router';
import VueResource from  'vue-resource';

//引入组件
import Vue from 'vue';
import App from './App';
import Test from '/views/test.vue';
//注册插件
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/test',

  },
];
const router  = new VueRouter();

//路由



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });
