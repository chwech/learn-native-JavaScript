// includes(value[,start])
// includes()方法返回一个布尔值。表示数组是否包含给定的值。

console.log([1, 2, 3].includes(2));//true
console.log([1, 2, 3].includes(4));//false
//第二个参数表示搜索的起始位置，默认为0。如果超出数组长度，则重置为0
console.log([1, 2, 3].includes(1, 1));//false
console.log([1, 2, 3].includes(1, -4));//true

console.log([1, 2, 3].includes(1, -2));//false