<template>
  <div id="explore">
    <section>
      <div class="weui-cells">
        <router-link to="/find/timeline" class="weui-cell weui-cell_access" tag="div" @click.native="hasNewMsg = false">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-circle.png">
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">朋友圈</div>
          <div class="weui-cell__ft">
            <div class="home__notice" v-show="hasNewMsg">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
              <i class="new-msg-dot"></i>
            </div>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
           <img src="../assets/images/find_icon-qrcode.png" >
          </div>
          <div class="weui-cell__bd">扫一扫</div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-shake.png">
          </div>
          <div class="weui-cell__bd">摇一摇</div>
        </div>
      </div>

      <div class="weui-cells">
        <a href="http://wq.jd.com" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-shopping.png">
          </div>
          <div class="weui-cell__bd">购物</div>
        </a>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-moregame.png">
          </div>
          <div class="weui-cell__bd">游戏</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    mixins: [window.mixins],
    data() {
      return {
        pageName: '发现',
        hasNewMsg: true
      }
    },
    activated() {
      this.toggleTipsStatus(-1)
    },
    methods: {
      ...mapMutations(['toggleTipsStatus'])
    }
  }
</script>

<style>
  @import '../assets/css/explore';
</style>
