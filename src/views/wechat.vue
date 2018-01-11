<template>
  <div id="wechat">
    <ul class="wechat-list">
      <WechatChat
        v-for="chat in chats"
        :chat="chat"
        :key="chat.mid"
      />
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import WechatChat from '@/components/wechat-chat'
  import '@/assets/css/wechat.css'

  export default {
    components: {
      WechatChat
    },
    mixins: [window.mixins],
    data () {
      return {
        pageName: '微信'
      }
    },
    created () {
      this.getChats()
    },
    computed: mapState(['chats']),
    methods: mapActions(['getChats'])
  }
</script>

<style>
  /*@import '../assets/css/wechat';*/
</style>
