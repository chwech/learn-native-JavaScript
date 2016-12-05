// String.prototype.search(str|RegExp)
// 查找给定字符串是否存在，存在则返回第一个找到的位置，不存在返回-1
let str = 'www.baidu.com';

console.log(str.search('baidu'));//4
console.log(str.search(/w/));//0
console.log(str.search(/w/g));//0
console.log(str.search(/\./g));//3
console.log(str.search('z'));//-1