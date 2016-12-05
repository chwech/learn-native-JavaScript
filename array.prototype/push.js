//push()方法接收任意个参数，逐个添加到数组末尾。返回修改后数组的长度
var arr = ['black', 'yellow', 'blue'];
console.log(arr.length);//3
var length = arr.push('red', 'green');
console.log(arr);//5
console.log(length);//[ 'black', 'yellow', 'blue', 'red', 'green' ]

