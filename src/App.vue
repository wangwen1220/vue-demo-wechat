<template>
  <div id="app">
    <Loading/>

    <!-- <div class="wrapper" :class="{hide: isSubpage}"> -->
    <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft">
      <div v-show="!isSubpage" class="wrapper">
        <AppHeader>{{ title }}</AppHeader>

        <!-- 主页面 -->
        <section class="app-content">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="300"
            mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </section>

        <AppFooter/>
      </div>
    </transition>

    <!-- 子页面 -->
    <transition
      :enter-active-class="`animated ${enterClass}`"
      :leave-active-class="`animated ${leaveClass}`">
      <router-view name="subpage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
  import Loading from './components/loading'
  import AppHeader from './components/app-header'
  import AppFooter from './components/app-footer'

  export default {
    name: 'app',
    components: {
      Loading,
      AppHeader,
      AppFooter
    },
    data() {
      return {
        title: '',
        enterClass: '',
        leaveClass: ''
      }
    },

    computed: {
      isSubpage() {
        return this.$route.path.split('/').length > 2
      }
    },

    watch: {
      // 监听 $route 为内页设置不同的过渡效果
      $route (to, from) {
        // console.log(to)
        console.log(to.matched)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length

        if (toDepth === 2 && to.meta.title) {
          // this.$store.commit('setTitle', to.name)
          this.title = to.meta.title
        }

        if (toDepth === fromDepth) return // 同一级页面无需设置过渡效果
        this.enterClass = toDepth > fromDepth ? 'slideInRight' : 'slideInLeft'
        this.leaveClass = toDepth > fromDepth ? 'slideOutLeft' : 'slideOutRight'

        // 从店面页进入店内页，需要对店内页重新设置离开动效，因为他们处于不同 name 的 router-view
        if (toDepth === 3) {
          this.leaveClass = 'slideOutRight'
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './assets/css/main.css'
</style>
