export default {
  // 设置当前页面名字
  setPageName (state, name) {
    state.pageName = name
  },

  // 当 search 组件全屏/非全屏时，切换公共头部状态
  toggleHeaderStatus (state, status) {
    state.headerStatus = status
  },

  // 切换“微信”页中右上角菜单
  toggleTipsStatus (state, status) {
    if (status === -1) {
      state.tipsStatus = false
    } else {
      state.tipsStatus = !state.tipsStatus
    }
  },

  // 增加未读消息数
  addNewMsg (state) {
    state.newMsgCount > 99 ? state.newMsgCount = '99+' : state.newMsgCount++
  },

  // 减少未读消息数
  minusNewMsg (state) {
    state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
  },

  // 设置联系人列表
  setContacts (state, data = []) {
    state.contacts = data
  },

  // 设置会话列表
  setChats (state, data = []) {
    state.chats = data
  }
}
