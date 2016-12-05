//map()对数组中的每一项运行给定的函数，返回每次函数调用结果组成的数组。
var number = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var mapResult = number.map(function(item, index, array){
    return item * 2;
});
console.log(number);//[1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mapResult);//[ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]
