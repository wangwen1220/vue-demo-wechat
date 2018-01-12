// 提供给 puer 来启动 mock server
// puer -a server.js
// module.exports = require('puer-mock')()

// 不使用默认的 _mockserver.json 文件名
// module.exports = require('puer-mock')(__filename, './config.json');

// js 文件的配置
// module.exports = require('puer-mock')(__filename, './config.js');

// 自定义 /_apidoc 做出一份更加高大上的接口文档
// module.exports = require('puer-mock')(null, null, function(config) {
//   // 任你自由发挥
//   return '<pre>' + JSON.stringify(config, null, 4) + '</pre>';
// });

// 其实你还可以这样玩
// import puerMock from 'puer-mock'
// import config from './config.json'

// 自定义接口
// const router = puerMock()

// 例如定义一个常用的 500 接口，来测试服务器报错的情况
// router['GET /500'] = (request, response, next) => {
//   response.status(500).end()
// }
// module.exports = router

// export default puerMock(__filename, config)

// 正确方式（用 import 会报错）
const path = require('path')
const puerMock = require('puer-mock')
module.exports = puerMock(__filename, path.resolve(__dirname, './config.js'))
