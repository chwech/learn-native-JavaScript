/**
 * 用递归的方式实现
 * 此方法有几个问题：
 * 1.会爆栈
 * 2.没有考虑数组、set、map、weakMap、weakSet等类型
 * 3.循环引用
 * @param {object} obj 
 */
function clone (obj) {
  var key, ret = {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof key === 'object') {
        ret[key] = clone(obj[key])        
      } else {
        ret[key] = obj[key]
      }
    }
  }
  return ret
}