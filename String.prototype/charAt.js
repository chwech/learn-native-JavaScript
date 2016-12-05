// charAt(index)
// index 范围为  0 - 字符串长度length-1.
// 如果没有指定默认为0。
// 如果超出范围返回空字符串

var char = 'abcdefg';

var d = char.charAt(3);
console.log(d);//d

var d1 = char.charAt(10);
console.log(d1);//空字符串

var d2 = char.charAt();
console.log(d2);//a