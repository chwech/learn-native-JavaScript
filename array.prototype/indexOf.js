//indexOf(value[,start])
//value要查找的项。start查找起点的位置索引。可选
//indexOf()从数组开头查找。返回查找项的索引，没有找到返回 -1。内部使用全等操作符（===）比较。
//所以查找NaN时会返回 -1。因为
var numbers = [1, 2, 3, 4, NaN, 4, 3, 2, 1];

console.log(numbers.indexOf(4));// 3
console.log(numbers.indexOf(4, 4));// 5
console.log(numbers.indexOf(NaN));// -1