// 获取联系方式
import ddb from 'wjtools'

export default {
  getContacts ({commit}) {
    ddb.get('/api/contacts').then(res => {
      if (res.status === 0) {
        commit('setContacts', res.data)
      } else {
        console.error(res.status, res.statusInfo)
      }
    })
  },

  getChats ({commit}) {
    console.log('commit')
    ddb.get('/api/chats').then(res => {
      console.log('get')
      if (res.status === 0) {
        commit('setChats', res.data)
      } else {
        console.error(res.status, res.statusInfo)
      }
    })
  }
}
