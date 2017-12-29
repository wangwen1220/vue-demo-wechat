<template>
  <div id="app">
    <loading></loading>

    <div class="wrapper" :class="{hide: isSubpage}">
      <app-header></app-header>

      <!-- 主页面 -->
      <section class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </section>

      <app-footer></app-footer>
    </div>

    <!-- 子页面 -->
    <transition :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subpage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
  import loading from './components/loading'
  import appHeader from './components/app-header'
  import appFooter from './components/app-footer'

  export default {
    name: 'app',
    components: {
      appHeader,
      appFooter,
      loading
    },
    data() {
      return {
        pageName: '',
        routerAnimate: false,
        enterAnimate: '', // 页面进入动效
        leaveAnimate: '' // 页面离开动效
      }
    },

    computed: {
      isSubpage() {
        return this.$route.path.split('/').length > 2
      }
    },

    watch: {
      // 监听 $route 为店内页设置不同的过渡效果
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length

        if (toDepth === 2) {
          this.$store.commit('setPageName', to.name)
        }

        if (toDepth === fromDepth) return // 同一级页面无需设置过渡效果
        this.enterAnimate = toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft'
        this.leaveAnimate = toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight'

        // 从店面页进入店内页，需要对店内页重新设置离开动效，因为他们处于不同 name 的 router-view
        if (toDepth === 3) {
          this.leaveAnimate = 'animated fadeOutRight'
        }
      }
    }
  }
</script>

<style>
  @import './assets/css/main';
</style>
