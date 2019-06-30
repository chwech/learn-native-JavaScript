/**
 * 2019年6月19日11:1:17
 * 对象转换成基本类型（拆箱操作），调用toPrimitive函数
 * toPrimitive函数即是对象的valueOf方法或toString方法
 * es6 可以通过Symbol.toPrimitive 重写toPrimitive函数
 * 转换成number会优先调用valueOf, 转换成string会优先调用toString
 * 如果toPrimitive不返回基本类型的值，返回对象会报TypeError
 */

var o = {
  toString () {
    console.log('toString')
    return 'string'
  },
  valueOf () {
    console.log('valueOf')
    return 123
  }
}

console.log(String(o)) // toString string
console.log(Number(o)) // valueOf 123

// 重写toPrimitive函数
o[Symbol.toPrimitive] = function () {
  return 'toPrimitive'
}

console.log(String(o)) // toPrimitive
console.log(Number(o)) // NaN
