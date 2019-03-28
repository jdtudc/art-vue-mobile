/**
 * @Author: Created By McChen
 * @Date: 2019/02/15
 * @Mail: mcchen.club@gmail.com
 * @Version: V1.0.0
 */

/**
 * @Function 格式化时间
 * @param {Date} date  '2017/10/01 | 2017-10-01 | 1506787200000'
 * @param {String} _format 'yyyy-MM-dd HH:mm:ss'
 * @
 */
export const formatTime = (date, _format) => {
  if (!date) {
    return null
  }
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/')
  }
  let t = new Date(date)
  let format = _format || 'yyyy-MM-dd HH:dd:ss'
  let tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        tf(t.getFullYear())
        break
      case 'MM':
        tf(t.getMonth() + 1)
        break
      case 'mm':
        tf(t.getMinutes())
        break
      case 'dd':
        tf(t.getDate())
        break
      case 'HH':
        tf(t.getHours())
        break
      case 'ss':
        tf(t.getSeconds())
        break
    }
  })
}
