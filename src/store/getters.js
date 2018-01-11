export default {
  // 获取排序后的联系人首字母
  getContactInitials: state => {
    let list = []
    state.contacts.forEach(item => {
      let initial = item.initial.toUpperCase()
      if (!list.includes(initial)) {
        list.push(initial)
      }
    })
    return list.sort()
  },

  // 获取联系人首字母分组
  getContactGroups(state, getters) {
    let contacts = state.contacts
    let contactInitials = getters.getContactInitials
    let list = {}
    contactInitials.forEach(initial => {
      list[initial] = []
      contacts.forEach(contact => {
        if (contact.initial.toUpperCase() === initial) {
          list[initial].push(contact)
        }
      })
    })
    return list
  },

  // 获取当前会话
  getChat: state => id => {
    return state.chats.find(chat => chat.mid === +id) || {}
  }
}
