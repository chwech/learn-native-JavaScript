/**
 * 2019年7月9日10:30:34
 * reduce函数的简单polyfill实现
 */
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    var array = this
    var item, i, accumulator, currentIndex
    // 有初始值，从数组第一个元素开始调用callback
    if (initialValue) {
      accumulator = initialValue
      currentIndex = 0
    // 否则，从数组第二个元素开始调用callback, 第一个元素作为累加器
    } else {
      accumulator = array[0]
      currentIndex = 1      
    }
    for (i = currentIndex; i < array.length; i++) {
      item = array[i]
      accumulator = callback(accumulator, item, i, array)
    }
    return accumulator
  }
}