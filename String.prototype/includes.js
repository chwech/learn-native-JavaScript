// String.prototype.includes(string[,start])

// 返回一个布尔值， 表示是否找到参数字符串
// 第二个参数表示搜索的起始位置。

var s = 'hello world!';

console.log(s.includes('ll'));//true
console.log(s.includes('e', 2));//false