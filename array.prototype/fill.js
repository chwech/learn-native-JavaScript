// fill()方法用指定值填充数组。
//fill(value[,start][,end])
// start和end表示填充的起始位置，可选
var a = new Array(5);
var b = a.fill(7);
console.log(b);//[7, 7, 7, 7, 7]
console.log(a);//[7, 7, 7, 7, 7]

var c = ['a', 'b', 'c'];
var d = c.fill(2, 1, 2);
console.log(d);//['a', 2, 'c']