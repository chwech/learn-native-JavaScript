/**
 * Created by chwech on 16-11-11.
 */
// Array.prototype.concat(arr[,arr1]...[arrN])
var a = ['a', 'b'];

//1. 不传参数时。复制数组并返回。
var b = a.concat();
console.log(b);//[ 'a', 'b' ]

//2. 传参数时,会把参数添加到数组末尾并返回
var c = a.concat('c');
console.log(c);//[ 'a', 'b', 'c']

//如果参数是一个数组或多个数组时，会把每项添加到结果数组中
var d = a.concat(['d', 'e']);
console.log(d);//[ 'a', 'b', 'd', 'e']

//这个方法对原来的数组没有影响。
console.log(a);//['a', 'b']