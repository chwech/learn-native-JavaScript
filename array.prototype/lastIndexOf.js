//lastIndexOf(value[,start])
//value要查找的项。start查找起点的位置索引。可选
//lastIndexOf()从数组末尾查找。返回查找项的索引，没有找到返回 -1。内部使用全等操作符（===）比较。
//所以查找NaN时会返回 -1。
var numbers = [1, 2, 3, 4, NaN, 4, 3, 2, 1];

console.log(numbers.lastIndexOf(4));// 5
console.log(numbers.lastIndexOf(4, 4));// 3
console.log(numbers.lastIndexOf(NaN));// -1