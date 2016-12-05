// shift()方法移除数组第一项，返回移除的项，同时数组长度减1。
var numbers = [1, 2, 3, 4];
console.log(numbers.length);//4
var s = numbers.shift();
console.log(s);//1
console.log(numbers);//[2, 3, 4]
console.log(numbers.length);//3