//String.prototype.repeat()
//NaN 和 -1 - 0 之间的数会被转为0
//负数会报错。
var str = 'abc';
console.log(str.repeat(-3));//Uncaught RangeError: Invalid count value(…)
console.log(str.repeat(0));//''
console.log(str.repeat(3));//'abcabcabc'
console.log(str.repeat(3.2));//'abcabcabc'
console.log(str.repeat(3.7));//'abcabcabc'
console.log(str.repeat(NaN));//''
console.log(str.repeat(-0.3));//''