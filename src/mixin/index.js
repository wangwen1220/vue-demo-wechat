import { mapMutations } from 'vuex'
const mixin = {
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  // todo:无效
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    // this.setPageName(this.pageName)
    console.log(to)
    console.log(next)
    next()
    // next(false)
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  methods: {
    ...mapMutations(['setPageName'])
  }
}

export default mixin
