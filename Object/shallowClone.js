/**
 * 2019年7月11日16:9:52
 * 浅复制实现
 * 浅复制就是复制对象的第一层属性
 * @param {object} obj 
 */
function shallowClone (obj) {
  var key, ret = {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}

// 其它浅复制方法
// 1. Object.assign
let obj = { a: 1 }
let obj1 = Object.assign({}, obj)

// 2. 扩展运算符
let obj2 = { ...obj1 }