//findIndex()方法
//找出第一个符合条件的数组成员的位置。参数是一个回调函数。没有找到返回-1
var array = [1, 3, -4, 4, -20];
var result = array.findIndex(function(item, index, arr){
    return item < 0;
});
console.log(result);// 2