<template>
  <footer class="app-footer">
    <div id="wx-nav">
      <nav>
        <router-link to="/" tag="dl" exact>
          <dt class="iconfont icon-wechat">
            <i v-if="$store.state.newMsgCount" class="new-msg-count">{{$store.state.newMsgCount}}</i>
          </dt>
          <dd>微信</dd>
        </router-link>
        <router-link to="/contact" tag="dl">
          <dt class="iconfont icon-contact"></dt>
          <dd>通讯录</dd>
        </router-link>
        <router-link to="/find" tag="dl">
          <dt class="iconfont icon-find" >
          <i class="new-msg-dot"></i>
          </dt>
          <dd>发现</dd>
        </router-link>
        <router-link to="/me" tag="dl">
          <dt class="iconfont icon-me"></dt>
          <dd>我</dd>
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default {
    mounted() {
      for (let i in this.$store.state.msgList.baseMsg) {
        if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
          this.$store.commit('addNewMsg')
        }
      }
    }
  }
</script>

<style>
  @import '../assets/css/wx-nav.css';
</style>
