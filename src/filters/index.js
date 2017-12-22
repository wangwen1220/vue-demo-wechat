const filters = {
  /**
   * 功能：将时间戳按照给定的时间/日期格式进行处理
   * @param {Number} date 时间戳
   * @param {String} fmtExp 时间格式 'hh:ss'
   * @returns {String} 规范后的 时间/日期 字符串
   */
  fmtDate: function (date, fmtExp) {
    let ret = ''
    date = new Date(date)
    let o = {
      'M+': date.getMonth() + 1, // 月
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(fmtExp)) {
      ret = fmtExp.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmtExp)) {
        ret = fmtExp.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }

    return ret
  }
}

export default (Vue) => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
