<template>
  <div id="self">
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/me/profile" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">阿荡</h4>
            <p class="self-wxid">微信号: zhaohd</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../assets/images/chat-info-qr.png">
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/me/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_more-my-album.png">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </router-link>
        <router-link to="/me/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_more-my-favorites.png">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </router-link>
        <router-link to="/me/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_more-my-bank-card.png">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </router-link>
        <router-link to="/me/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_my-card-package-icon.png">
          </div>
          <div class="weui-cell__bd">
            <p>卡券</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/me/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_more-expression.png">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/me/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/me_more-setting.png">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    mixins: [window.mixins],
    data() {
      return {
        pageName: '我'
      }
    },
    mounted() {
      this.toggleTipsStatus(-1)
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
  @import '../assets/css/self';
</style>
