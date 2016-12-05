// String.prototype.endsWith(string[,start]);
// 返回布尔值，表示参数字符串是否在字符串的尾部。
// 第二个参数表示字符串的尾部位置
var s = 'hello world!';

console.log(s.endsWith('world'));//false
console.log(s.endsWith('world!'));//true
console.log(s.endsWith('hello', 5));//true
console.log(s.endsWith('world!', 5));//false
