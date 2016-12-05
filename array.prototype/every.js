//every()方法会对数组的每一项运行给定的函数。
//如果函数每一项对数组返回true,则返回true

var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = array.every(function(item, index, array){
    console.log(item > 2);
    return item > 2;
});
console.log(result);//false