/** 2019年7月5日11:14:27
 *  map函数的polyfill实现
 */
if (!Array.prototype.map) {
  Array.prototype.map = function (cb) {
    var arr = this
    var i, item, ret = []
    for (i = 0; i < arr.length; i++) {
      item = arr[i]
      if (cb(item, i, arr)) {
        ret.push(item)
      }
    }
    return ret
  }
}