import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const wechat = resolve => require(['@/views/wechat.vue'], resolve)
const wechat = () => import('@/views/wechat.vue')
const dialogue = () => import('@/views/wechat/dialogue.vue')
const contact = () => import('@/views/contact.vue')
const find = () => import('@/views/find.vue')
const timeline = () => import('@/views/find/timeline.vue')
const me = () => import('@/views/me.vue')
const settings = () => import('@/views/me/settings.vue')
const profile = () => import('@/views/me/profile.vue')

const routes = [{
  name: 'wechat',
  path: '/',
  alias: '/wechat',
  component: wechat,
  meta: {
    title: '微信'
  }
}, {
  name: 'dialogue',
  path: '/wechat/dialogue',
  components: {
    'default': wechat,
    'subpage': dialogue
  }
}, {
  name: 'contact',
  path: '/contact',
  component: contact,
  meta: {
    title: '通讯录'
  }
}, {
  name: 'find',
  path: '/find',
  component: find,
  meta: {
    title: '发现'
  }
}, {
  name: 'timeline',
  path: '/find/timeline',
  components: {
    'default': find,
    'subpage': timeline
  },
  meta: {
    title: '朋友圈'
  }
}, {
  name: 'me',
  path: '/me',
  component: me,
  meta: {
    title: '我'
  }
}, {
  name: 'settings',
  path: '/me/settings',
  components: {
    'default': me,
    'subpage': settings
  },
  meta: {
    title: '设置'
  }
}, {
  name: 'profile',
  path: '/me/profile',
  components: {
    'default': me,
    'subpage': profile
  },
  meta: {
    title: 'xxx'
  }
}]

export default new Router({
  mode: 'history',
  base: __dirname,
  routes,
  // todo:注意: 这个功能只在 HTML5 history 模式下可用
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    // return savedPosition || to.hash || {x: 0, y: 0}
    return savedPosition || {}
  }
})
