import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: '微信',
  component: resolve => require(['../views/wechat/wechat.vue'], resolve)
}, {
  path: '/wechat/dialogue',
  components: {
    'default': resolve => require(['../views/wechat/wechat.vue'], resolve),
    'subPage': resolve => require(['../views/wechat/dialogue.vue'], resolve)
  }
}, {
  path: '/contact',
  name: '通讯录',
  component: resolve => require(['../views/contact/contact.vue'], resolve)
}, {
  path: '/contact/details',
  components: {
    'default': resolve => require(['../views/contact/contact.vue'], resolve),
    'subPage': resolve => require(['../views/contact/details.vue'], resolve)
  }
}, {
  path: '/contact/group-list',
  components: {
    'default': resolve => require(['../views/contact/contact.vue'], resolve),
    'subPage': resolve => require(['../views/contact/group-list.vue'], resolve)
  }
}, {
  path: '/explore',
  name: '发现',
  component: resolve => require(['../views/explore/explore.vue'], resolve)
}, {
  path: '/explore/moments',
  name: '朋友圈',
  components: {
    'default': resolve => require(['../views/explore/explore.vue'], resolve),
    'subPage': resolve => require(['../views/explore/moments.vue'], resolve)
  }
}, {
  path: '/self',
  name: '我',
  component: resolve => require(['../views/self/self.vue'], resolve)
}, {
  path: '/self/settings',
  components: {
    'default': resolve => require(['../views/self/self.vue'], resolve),
    'subPage': resolve => require(['../views/self/settings.vue'], resolve)
  }
}, {
  path: '/self/profile',
  components: {
    'default': resolve => require(['../views/self/self.vue'], resolve),
    'subPage': resolve => require(['../views/common/profile.vue'], resolve)
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
