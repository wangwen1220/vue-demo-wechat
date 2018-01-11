<template>
  <!-- 消息列表组件 -->
  <li class="list-row line-bottom" :class="{'hide': deleted}">
    <!--自定义指令 v-swiper 用于对每个消息进行滑动处理-->
    <router-link :to="{path: '/wechat/dialogue', query: query}" tag="div" class="list-info" v-swiper @click.native="toggleMsgRead($event, 'enter')">
      <div class="header-box">
        <!--未读并且未屏蔽 才显示新信息数量-->
        <i class="new-msg-count" v-show="!read && !chat.quiet">{{ chat.messages.length }}</i>
        <!--未读并且屏蔽 只显示小红点-->
        <i class="new-msg-dot" v-show="!read && chat.quiet"></i>
        <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
        <div class="header" :class="{'multi-header': isGroup}">
          <img v-for="userInfo in users" :src="userInfo.headerUrl">
        </div>
      </div>

      <div class="desc-box">
        <!--使用过滤器 fmtDate 格式化时间-->
        <div class="desc-time">{{ chat.messages[chat.messages.length-1].date | fmtDate('hh:ss') }}</div>
        <div v-if="isGroup" class="desc-author">{{ chat.group_name }}</div>
        <!--如果没有备注好友，则显示微信昵称-->
        <div v-else class="desc-author">{{ username }}</div>
        <div class="desc-msg">
          <div v-show="chat.quiet" class="desc-mute iconfont icon-mute">
          </div>
          <span v-show="isGroup">{{ chat.messages[chat.messages.length-1].name }}:</span>
          <span>{{ chat.messages[chat.messages.length-1].text }}</span>
        </div>
      </div>
    </router-link>

    <div class="operate-box">
      <div v-if="read" class="operate-unread" @click="toggleMsgRead">标为未读</div>
      <div v-else class="operate-read" @click="toggleMsgRead">标为已读</div>
      <div class="operate-del" @click="deleteMsg">删除</div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      chat: {
        type: Object,
        required: true
      }
    },
    data () {
      const users = this.chat.users || []
      const username = users.length > 0 && (users[0].remark || users[0].nickname)
      return {
        read: this.chat.read,
        isGroup: this.chat.type === 'group',
        deleted: false,
        users,
        username,
        query: {
          mid: this.chat.mid,
          name: this.chat.group_name || username,
          group_num: users.length
        }
      }
    },

    methods: {
      // 切换消息未读/已读状态
      toggleMsgRead (event, status) {
        if (status === 'enter') {
          if (this.read) {
            return ''
          }
          this.read = true
        } else {
          this.read = !this.read
        }
        if (!this.chat.quiet) {
          if (this.read) {
            this.$store.commit('minusNewMsg')
          } else {
            this.$store.commit('addNewMsg')
          }
        }

        event.target.parentNode.parentNode.firstChild.style.marginLeft = 0 + 'px'
      },

      deleteMsg () {
        this.deleted = true
        if (!this.chat.quiet) {
          if (!this.read) {
            this.$store.commit('minusNewMsg')
          }
        }
      }
    },

    directives: {
      swiper: {
        bind: function (element, binding) {
          let isTouchMove, startTx, startTy

          element.addEventListener('touchstart', e => {
            let touches = e.touches[0]
            startTx = touches.clientX
            startTy = touches.clientY
            isTouchMove = false
          }, false)

          element.addEventListener('touchmove', e => {
            let touches = e.changedTouches[0]
            let endTx = touches.clientX
            let endTy = touches.clientY
            let distanceX = startTx - endTx
            let distanceY = startTy - endTy

            if (distanceX < 0) { // 右滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (Math.abs(distanceX) > 20) {
                  element.style.transition = '0.3s'
                  element.style.marginLeft = 0 + 'px'
                }
              }
            } else { // 左滑
              if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                if (distanceX < 156 && distanceX > 20) {
                  e.preventDefault()
                  element.style.transition = '0s'
                  element.style.marginLeft = -distanceX + 'px'
                  isTouchMove = true
                }
              }
            }
            // e.preventDefault()
            // event.stopImmediatePropagation()
            // event.stopPropagation()
          }, false)

          element.addEventListener('touchend', e => {
            if (!isTouchMove) return
            let touches = e.changedTouches[0]
            let endTx = touches.clientX
            let endTy = touches.clientY
            let distanceX = startTx - endTx
            let distanceY = startTy - endTy
            // let isSwipe = false

            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
              if (distanceX < 0) return
              if (Math.abs(distanceX) < 60) {
                // isSwipe = true
                element.style.transition = '0.3s'
                element.style.marginLeft = 0 + 'px'
              } else {
                element.style.transition = '0.3s'
                element.style.marginLeft = '-156px'
              }
            }
          }, false)
        }
      }
    }
  }
</script>
