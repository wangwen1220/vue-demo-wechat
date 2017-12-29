import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  alias: '/wechat',
  name: '微信',
  component: resolve => require(['../views/wechat.vue'], resolve)
}, {
  path: '/wechat/dialogue',
  components: {
    'default': resolve => require(['../views/wechat.vue'], resolve),
    'subpage': resolve => require(['../views/wechat/dialogue.vue'], resolve)
  }
}, {
  path: '/contact',
  name: '通讯录',
  component: resolve => require(['../views/contact.vue'], resolve)
}, {
  path: '/find',
  name: '发现',
  component: resolve => require(['../views/find.vue'], resolve)
}, {
  path: '/find/timeline',
  name: '朋友圈',
  components: {
    'default': resolve => require(['../views/find.vue'], resolve),
    'subpage': resolve => require(['../views/find/timeline.vue'], resolve)
  }
}, {
  path: '/me',
  name: '我',
  component: resolve => require(['../views/me.vue'], resolve)
}, {
  path: '/me/settings',
  components: {
    'default': resolve => require(['../views/me.vue'], resolve),
    'subpage': resolve => require(['../views/me/settings.vue'], resolve)
  }
}, {
  path: '/me/profile',
  components: {
    'default': resolve => require(['../views/me.vue'], resolve),
    'subpage': resolve => require(['../views/me/profile.vue'], resolve)
  }
}]

export default new Router({
  mode: 'history',
  base: '/vue-wechat/',
  routes,
  // 注意: 这个功能只在 HTML5 history 模式下可用
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})
