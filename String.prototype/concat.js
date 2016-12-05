//String.prototype.concat(string[,string1][,string2]...[,stringN]);

var a = 'a';

//1. 不传参数时。复制字符串并返回。
var b = a.concat();
console.log(b);//'a'

//2. 传参数时,会把参数添加到字符串末尾并返回
var c = a.concat('b');
console.log(c);//'ab'

//如果参数是多个字符串时，会把每项添加到结果字符串中
var d = a.concat('c', 'd');
console.log(d);//'acd'

//这个方法对原来的字符串没有影响。
console.log(a);//'a'