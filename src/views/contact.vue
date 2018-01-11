<template>
  <div id="contact">
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
        <div class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-friend-notify.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-addgroup.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-tag.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </div>
      </div>

      <!--联系人集合-->
      <template v-for="(contacts, key) in contactGroups">
        <!--首字母-->
        <div :ref="`key_${key}`" class="weui-cells__title">{{key}}</div>
        <div class="weui-cells">
          <div
            v-for="item in contacts"
            :key="item.wxid"
            class="weui-cell weui-cell_access"
          >
            <div class="weui-cell__hd"><img :src="item.headerUrl" class="home__mini-avatar___1nSrW"></div>
            <div class="weui-cell__bd">{{item.remark ? item.remark : item.nickname}}</div>
          </div>
        </div>
      </template>
    </section>

    <!--检索-->
    <div class="initial-bar"><span v-for="initial in contactInitials" @click="toPs(initial)">{{initial}}</span></div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    mixins: [window.mixins],
    data() {
      return {
        pageName: '通讯录'
      }
    },
    mounted() {
      this.toggleTipsStatus(-1)
    },
    activated() {
      this.getContacts()
      this.toggleTipsStatus(-1)
    },
    computed: mapGetters({
      contactGroups: 'getContactGroups',
      contactInitials: 'getContactInitials'
    }),
    methods: {
      ...mapMutations(['toggleTipsStatus']),
      ...mapActions(['getContacts']),
      toPs(i) {
        window.scrollTo(0, this.$refs['key_' + i][0].offsetTop)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/css/contact.css'
</style>
