// unshift()方法从数组前端添加任意项，返回数组长度。
var numbers = [2, 3, 4];
console.log(numbers.length);//3
var s = numbers.unshift(1);
console.log(s);//4
console.log(numbers);//[1, 2, 3, 4]
console.log(numbers.length);//4