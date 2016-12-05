
// codePointAt(index) , 返回代表指定索引字符匹配的Unicode(65535以后)(4个字节)码点的数字
// index 范围为  0 - 字符串长度length-1.
// 如果没有指定默认为0。
// 如果超出范围返回undefined
//=================================
//可以识别4个字符字符。
var char = 'abcABCa';
console.log(char.codePointAt());//97
console.log(char.codePointAt(0));//97
console.log(char.codePointAt(3));//65
console.log(char.codePointAt(6));
console.log(char.codePointAt(7));
console.log(char.codePointAt(8));
console.log(char.codePointAt(20));//undefined