import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters'
import FastClick from 'fastclick'

Vue.config.devtools = true
Vue.config.productionTip = false // 关闭 Vue 启动时的提示信息

// 注册全局过滤器
filters(Vue)

// 使用 fastclick 解决移动端 300ms 点击延迟
FastClick.attach(document.body)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
