// String.prototype.trim()
// 去掉字符串前后的空格
var str = '   foo   ';
console.log(str.trim());//foo

str = 'foo    ';
console.log(str.trim());//foo

str = '      foo';
console.log(str.trim());//foo

str = '  f  oo   ';
console.log(str.trim());//f  oo
