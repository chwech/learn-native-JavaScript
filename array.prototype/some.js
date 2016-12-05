//some()方法会对数组的每一项运行给定的函数。
//如果函数对数组其中一项返回true,则返回true

var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = array.some(function(item, index, array){
    console.log(item);
    return item > 2;
});
//console.log(result);//true