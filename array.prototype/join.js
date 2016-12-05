// join()方法接收用作分隔数符的字符串。返回所有包含数组项的字符串
var arr = ['red', 'green', 'blue'];
//在不传入参数的情况下，默认以,分隔输出
console.log(arr.join());// red,green,blue

console.log(arr.join(' '));//red green blue
console.log(arr.join(','));// red,green,blue
console.log(arr.join('/'));// red/green/blue

var arr1 = ['red', 'green', undefined,'blue'];
var arr2 = ['red', 'green', null,'blue'];

//如果数组成员有undefined或null，则该项会以空字符串输出。
console.log(arr1.join('|'));// red|green||blue
console.log(arr2.join('|'));// red|green||blue
