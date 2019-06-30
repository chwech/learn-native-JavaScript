/**
 * 模拟new操作符
 * @author chwech
 * @date 2019年6月24日22:9:24
 * @param {Function} constrctor
 * @param {*} args
 * @returns 
 */
function myNew(constrctor, ...args) {
  //  创建一个新对象
  var o = {}
  //  新对象的__proto__指向构造函数的prototype原型
  o.__proto__ = constrctor.prototype
  //  将这个对象作为this上下文，执行函数
  var ret = constrctor.apply(o, args)
  //  如果构造函数不返回对象，则返回这个对象
  return typeof ret === 'object' ? ret : o
}