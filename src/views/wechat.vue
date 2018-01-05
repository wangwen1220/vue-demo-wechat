<template>
  <div id="wechat">
    <ul class="wechat-list">
      <msg v-for="msg in msgs" :item="msg" class="list-row line-bottom" :key="msg.mid"></msg>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import msg from '@/components/msg'
  import '@/assets/css/wechat.css'

  export default {
    components: {
      msg
    },
    mixins: [window.mixin],
    data () {
      return {
        pageName: '微信'
      }
    },
    computed: mapState({
      msgs: state => state.msgList.baseMsg
    })
  }
</script>

<style>
  /*@import '../assets/css/wechat';*/
</style>
