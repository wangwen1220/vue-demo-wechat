<template>
<div class="dialogue">
  <header id="wx-header">
    <div class="other">
      <!-- <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link> -->
      <!-- <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link> -->
    </div>
    <div class="center">
      <router-link to="/" tag="div" class="iconfont icon-return-arrow">微信</router-link>
      <span>{{pageName}}</span>
      <span v-show='$route.query.group_num && $route.query.group_num != 1' class="parentheses">{{$route.query.group_num}}</span>
    </div>
  </header>

  <section class="dialogue-section clearfix" @click="MenuOutsideClick">
    <div v-for="item in msgInfo.msg" class="row clearfix">
      <img class="header" :src="item.headerUrl">
      <p class="text">{{item.text}}</p>
    </div>
  </section>

  <footer class="dialogue-footer">
    <div class="component-dialogue-bar-person">
      <span :class="['iconfont icon-dialogue-', isVoice ? 'keyboard' : 'voice']" @click="switchChatWay"></span>
      <div class="chat-way" v-show="isVoice">
        <div class="chat-say" v-press>
          <span class="one">按住 说话</span>
          <span class="two">松开 结束</span>
        </div>
      </div>
      <div class="chat-way" v-show="!isVoice">
        <input class="chat-txt" type="text" @focus="focusIpt" @blur="blurIpt">
      </div>
      <span class="expression iconfont icon-dialogue-smile"></span>
      <span class="more iconfont icon-dialogue-jia"></span>
      <div class="recording" style="display: none;" id="recording">
        <div class="recording-voice" style="display: none;" id="recording-voice">
          <div class="voice-inner">
            <div class="voice-icon"></div>
            <div class="voice-volume">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>手指上划,取消发送</p>
        </div>
        <div class="recording-cancel" style="display: none;">
          <div class="cancel-inner"></div>
          <p>松开手指,取消发送</p>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
  // import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        pageName: this.$route.query.name,
        isVoice: true,
        timer: null
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      // ...mapGetters(['msgInfo'])
      msgInfo() {
        return this.$store.getters.getMsgInfo(this.$route.query.mid)
      }
    },

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('setPageName', vm.$route.query.name)
      })
    },

    directives: {
      press: {
        inserted(element, binding) {
          let recording = document.querySelector('.recording')
          let recordingVoice = document.querySelector('.recording-voice')
          let recordingCancel = document.querySelector('.recording-cancel')
          // let startTx
          let startTy

          element.addEventListener('touchstart', function(e) {
            // 用bind时，vue还没插入到dom,故dom获取为 undefine，用 inserted 代替 bind,也可以开个0秒的定时器
            element.className = 'chat-say say-active'
            recording.style.display = recordingVoice.style.display = 'block'
            let touches = e.touches[0]
            // startTx = touches.clientX
            startTy = touches.clientY
            e.preventDefault()
          }, false)

          element.addEventListener('touchend', function(e) {
            element.className = 'chat-say'
            recordingCancel.style.display = recording.style.display = recordingVoice.style.display = 'none'
            e.preventDefault()
          }, false)

          element.addEventListener('touchmove', function(e) {
            let touches = e.changedTouches[0]
            // let endTx = touches.clientX
            let endTy = touches.clientY
            // let distanceX = startTx - endTx
            let distanceY = startTy - endTy

            if (distanceY > 50) {
              element.className = 'chat-say'
              recordingVoice.style.display = 'none'
              recordingCancel.style.display = 'block'
            } else {
              element.className = 'chat-say say-active'
              recordingVoice.style.display = 'block'
              recordingCancel.style.display = 'none'
            }

            e.preventDefault() // 阻断事件冒泡，防止页面被一同向上滑动
          }, false)
        }
      }
    },

    methods: {
      switchChatWay() {
        this.isVoice = !this.isVoice
      },

      // 解决输入法被激活时 底部输入框被遮住问题
      focusIpt() {
        this.timer = setInterval(function() {
          document.body.scrollTop = document.body.scrollHeight
        }, 100)
      },

      blurIpt() {
        clearInterval(this.timer)
      },

      // 点击空白区域，菜单被隐藏
      MenuOutsideClick(e) {
        let container = document.querySelectorAll('.text')
        let msgMore = document.getElementById('msg-more')

        if (e.target.className === 'text') {} else {
          msgMore.style.display = 'none'
          container.forEach(item => {
            item.style.backgroundColor = '#fff'
          })
        }
      }
    }
  }
</script>

<style>
  @import '../../assets/css/dialogue.css';
  .say-active {
    background: #c6c7ca;
  }
</style>
