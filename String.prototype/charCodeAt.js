// charCodeAt(index) , 返回代表指定索引字符匹配的UTF-16格式(0-65535)(两个字节)码点的数字
// index 范围为  0 - 字符串长度length-1.
// 如果没有指定默认为0。
// 如果超出范围返回NaN
//=====================================
// 不能误别4个字节的字符。
var char = 'abcABC';
console.log(char.charCodeAt());//97
console.log(char.charCodeAt(0));//97
console.log(char.charCodeAt(3));//65
console.log(char.charCodeAt(7));//NaN
