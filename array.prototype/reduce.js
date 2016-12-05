// reduce(fn[,initValue])
// reduce()接收两个参数，第一个参数是在每一项上调用的函数。
// 第二个参数是作为归并基础的初始值。
// 第一次迭代发生在第二项。这个函数返回的结果会自动传入下一次迭代函数的第一个参数。
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(prev, cur, index, arr){
    console.log(prev);//1, 3, 6, 10
    console.log(cur);// 2, 3, 4, 5
    return prev + cur;
});
console.log(sum);//15