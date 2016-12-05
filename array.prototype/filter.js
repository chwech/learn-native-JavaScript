//filter()方法会对数组的每一项运行给定的函数。
//返回该函数会返回true的项组成的数组。
var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var result = array.filter(function(item, index, array){
    console.log(item > 2);
    return item > 2;
});
console.log(result);//[ 3, 4, 5, 4, 3 ]
