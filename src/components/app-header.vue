<template>
  <header class="app-header" :class="{'header-hide': !$store.state.headerStatus}">
    <div id="wx-header">
      <!--右上角图标-->
      <div class="other menu">
        <!--只在“微信”页显示更多图标-->
        <span class="iconfont icon-tips-jia" v-show="$route.path === '/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
        <!--只在“通讯录”页显示添加好友图标-->
        <router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>
        <!--只在“添加朋友”页显示 -->
        <span v-show="$route.path === '/contact/new-friends'">添加朋友</span>
        <!--下面这个好像有些多余 sad -->
        <span class="iconfont icon-chat-friends" v-show="$route.path === '/wechat/dialogue'"></span>

        <!-- 更多图标的菜单 附带过渡效果-->
        <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']" v-on:click="$store.commit('toggleTipsStatus', -1)">
          <li>
            <span class="iconfont icon-tips-xiaoxi"></span>
            <div>发起群聊</div>
          </li>
          <router-link tag="li" to="/wehchat/add-friend">
            <span class="iconfont icon-tips-add-friend"></span>
            <div>添加朋友</div>
          </router-link>
          <li> <span class="iconfont icon-tips-saoyisao"></span>
            <div>扫一扫</div>
          </li>
          <li> <span class="iconfont icon-tips-fukuan"></span>
            <div>收付款</div>
          </li>
        </ul>
      </div>
      <div class="center">
        <!-- 显示当前页的名字 -->
        <span><slot>{{$store.state.pageName}}</slot></span>
        <!--微信群 显示群名以及成员人数 好像和 dialogue 组件 写重了 sad -->
        <span class="parentheses" v-show='$route.query.group_num > 1'>{{$route.query.group_num}}</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        // chatCount: true
      }
    },
    computed: {
      // 搜索框只在“微信”和“通讯录”页面下显示
      showSearch() {
        return this.$route.path.includes('wechat') || this.$route.path.includes('contact')
      }
    }
  }
</script>
