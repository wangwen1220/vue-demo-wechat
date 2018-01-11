// js 格式的 mock 配置
const contacts = require('./data/contacts')
const chats = require('./data/chats')

module.exports = {
  api: {
    'GET /doc': {
      info: {
        summary: '代理接口文档',
        description: '代理接口文档到其真实地址',
        author: 'Steven'
      },
      proxy: {
        target: 'http://localhost:8000/src/mock/doc.html',
        ignorePath: true
      }
    },

    'GET /api/test': {
      info: {
        summary: '测试接口',
        description: '测试返回复杂的动态假数据',
        author: 'Steven'
      },
      response: {
        status: 0,
        statusInfo: {
          message: 'ok'
        },
        data: {
          'foo|10-30': [{
            text: '固定值', // 可以夹杂其他固定值
            id: '@id',
            guid: '@guid',
            index: '@increment',
            name: '@cname',
            address: '@province@city@county',
            email: '@email',
            desc: '@cparagraph',
            avatar: '@image("200x100", "#50B347", "#FFF", "Mock.js")',
            age: '@integer(10, 50)',
            money: '@float(0, 100, 2, 2)', // 返回带2位小数位的小数
            isVip: '@boolean',
            now: '@now("yyyy-MM-dd HH:mm:ss")',
            datetime: '@datetime("yyyy-MM-dd HH:mm:ss")',
            url: '@url("http")',
            gender: '@pick(["male", "female"])', // 随机取一个
            timestamp: '@integer(1471491895528, 1481491895528)' // 通过整型数字来伪造时间戳
          }]
        }
      }
    },

    'GET /api/query': {
      info: {
        summary: '配置接口参数类型',
        description: '如果配置了必传参数, 则会校验前端调用时的输入参数是否与接口匹配',
        author: 'Steven'
      },
      request: {
        querystring: {
          '*str': '1',
          '*num': 1,
          '*bol': true
        }
      },
      response: {
        route: '传参正常'
      }
    },

    'GET /api/contacts': {
      info: {
        summary: '获取联系人信息',
        description: '获取微信联系人信息',
        author: 'Steven'
      },
      response: {
        status: 0,
        statusInfo: {
          message: 'ok'
        },
        data: contacts
      }
    },

    'GET /api/chats': {
      info: {
        summary: '获取会话消息',
        description: '获取会话消息列表',
        author: 'Steven'
      },
      response: {
        status: 0,
        statusInfo: {
          message: 'ok'
        },
        data: chats
      }
    }
  }
}
