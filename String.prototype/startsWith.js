// String.prototype.startsWith(string[,start])
// 返回布尔值，表示参数字符串是否在源字符串的头部。
// 第二参数表示搜索的起始位置
var s = 'hello world!';
console.log(s.startsWith('hel'));//true
console.log(s.startsWith('hello', 5));//false
console.log(s.startsWith('world!'));//false
