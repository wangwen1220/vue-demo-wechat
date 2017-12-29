import { mapMutations } from 'vuex'
const mixin = {
  mounted () {
    this.setPageName(this.pageName)
  },
  activated () {
    this.setPageName(this.pageName)
  },
  methods: {
    ...mapMutations(['setPageName'])
  }
}

export default mixin
