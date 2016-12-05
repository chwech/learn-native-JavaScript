//forEach()只是对数组每一项运行传入的函数。没有返回值。不会改变原数组。
//与使用for循环的效果一样。
var number = [1, 2, 3, 4, 5, 4, 3, 2, 1];
number.forEach(function(item, index, array){
    item *= 2;
    console.log(item)
});
console.log(number);//[1, 2, 3, 4, 5, 4, 3, 2, 1]