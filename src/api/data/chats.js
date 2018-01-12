// 会话列表
const contacts = require('./contacts')
const getUserinfo = wxid => contacts.find(contact => wxid && wxid === contact.wxid)

module.exports = [{
  mid: 1, // 消息的 id 唯一标识，重要
  type: 'friend',
  group_name: '',
  group_qrCode: '',
  read: true, // true - 已读；false - 未读
  newMsgCount: 1,
  quiet: false, // true：消息免打扰；false：提示此好友/群的新消息
  messages: [{ // 对话框的聊天记录新消息 push 进
    text: '长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单',
    date: 1488117964495,
    name: '阿荡',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
  }, {
    text: '点击空白处，操作菜单消失',
    date: 1488117964495,
    name: '阿荡',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
  }, {
    text: '来呀 快活啊',
    date: 1488117964495,
    name: '阿荡',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
  }],
  users: [getUserinfo('wxid_zhaohd')] // 此消息的用户数组：长度为1则为私聊；长度大于1则为群聊
}, {
  mid: 2,
  type: 'group',
  group_name: '收购万达讨论群',
  group_qrCode: '',
  read: false,
  newMsgCount: 1,
  quiet: true,
  messages: [{
    text: '长按消息，唤醒消息操作菜单',
    date: 1488117964495,
    name: '夜华',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/yehua.jpg'
  }, {
    text: '点击空白处，操作菜单消失',
    date: 1488117964495,
    name: '阿荡',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/header01.png'
  }, {
    text: '我试一试',
    date: 1488117964495,
    name: '夜华',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/yehua.jpg'
  }],
  users: [getUserinfo('wxid_zhaohd'), getUserinfo('wxid_yehua')]
}, {
  mid: 3,
  type: 'group',
  group_name: '收购淘宝讨论群',
  group_qrCode: '',
  read: true,
  newMsgCount: 1,
  quiet: true,
  messages: [{
    text: '冒个泡',
    date: 1488117964495,
    name: '诸葛亮',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg'
  }],
  users: [getUserinfo('wxid_zhenji'), getUserinfo('wxid_zhugeliang'), getUserinfo('wxid_zhaohd')]
}, {
  mid: 4,
  type: 'friend',
  group_name: '',
  group_qrCode: '',
  read: false,
  newMsgCount: 4,
  quiet: false,
  messages: [{
    text: '长按消息，唤醒消息操作菜单',
    date: 1488117964495,
    name: '孙权',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg'
  }, {
    text: '点击空白处，操作菜单消失',
    date: 1488117964495,
    name: '孙权',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg'
  }, {
    text: '容我三思',
    date: 1488117964495,
    name: '孙权',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg'
  }],
  users: [getUserinfo('wxid_sunquan')]
}, {
  mid: 5,
  type: 'friend',
  group_name: '',
  group_qrCode: '',
  read: false,
  newMsgCount: 4,
  quiet: false,
  messages: [{
    text: '夫君,身体要紧~ ',
    date: 1488117964495,
    name: '孙尚香',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg'
  }],
  users: [getUserinfo('wxid_sunshangxiang')]
}, {
  mid: 6,
  type: 'friend',
  group_name: '',
  group_qrCode: '',
  read: false,
  newMsgCount: 4,
  quiet: true,
  messages: [{
    text: '三姓家奴！ ',
    date: 1488117964495,
    name: '关羽',
    headerUrl: 'https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg'
  }],
  users: [getUserinfo('wxid_guangyu')]
}]
