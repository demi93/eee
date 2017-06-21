// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'
import './common/stylus/index.styl'

// Vue.config.productionTip = false
Vue.use(VueRouter); //安装这个插件
/* eslint-disable no-new */
Vue.use(VueResource);
const routes = [
  { path: '/goods' , component: goods },
  { path: '/ratings' , component: ratings },
  { path: '/seller' , component: seller }
]

// 使用路由规则
const router = new VueRouter({
 routes
})
//加载路由规则ws fn8i
new Vue({
 router,
 el: '#app',
 data:{
 	eventHub:new Vue()
 },
 render:h => h(App)

})
// router.push('/goods');
