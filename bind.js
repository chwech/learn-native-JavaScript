// 2019年6月24日22:11:29
// bind函数的实现
if (!Function.prototype.bind && typeof Function.prototype.bind !== 'function') {
  Function.prototype.bind = function () {
    var thisArg = arguments[0]
    var argList = Array.prototype.slice.call(arguments, 1) // 类数组转换成数组
    // 原函数是this
    var toBindFn = this
    // 绑定函数
    var boundFn = function () {
      var args = Array.prototype.slice.call(arguments)
      isCallWithNew = this instanceof boundFn
      return toBindFn.apply(isCallWithNew ? this : thisArg, argList.concat(args))
    }
    return boundFn
  }
}