const getters = {

  //  从联系人中提取出首字母 再排序
  contactsInitialList: state => {
    let initialList = []
    let allContacts = state.allContacts
    let max = allContacts.length
    for (let i = 0; i < max; i++) {
      if (initialList.indexOf(allContacts[i].initial.toUpperCase()) === -1) {
        initialList.push(allContacts[i].initial.toUpperCase())
      }
    }
    return initialList.sort()
  },

  // 将联系人根据首字母进行分类
  contactsList: (state, getters) => {
    let contactsList = {}
    let allContacts = state.allContacts
    let max = allContacts.length
    for (let i = 0; i < getters.contactsInitialList.length; i++) {
      let protoTypeName = getters.contactsInitialList[i]
      contactsList[protoTypeName] = []
      for (let j = 0; j < max; j++) {
        if (allContacts[j].initial.toUpperCase() === protoTypeName) {
          contactsList[protoTypeName].push(allContacts[j])
        }
      }
    }
    return contactsList
  },

  // 获取当前聊天信息
  getMsgInfo: state => id => {
    return state.msgList.baseMsg.find(msg => msg.mid === id) || {}
  }
}

export default getters
