//pop()方法移除数组最后一项，减少数组长度，返回移除的项
var arr = ['red', 'yellow', 'black'];
console.log(arr.length);//3
var lastItem = arr.pop();
console.log(lastItem);//black
console.log(arr.length);//2
console.log(arr);//['red', 'yellow']