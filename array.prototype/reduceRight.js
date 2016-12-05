// reduceRight()与reduce()方法类似，reduceRight只是从最后的项向前迭代
// reduceRight(fn[,initValue])
// reduceRight()接收两个参数，第一个参数是在每一项上调用的函数。
// 第二个参数是作为归并基础的初始值。
// 第一次迭代发生在倒数第二项。这个函数返回的结果会自动传入下一次迭代函数的第一个参数。
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduceRight(function(prev, cur, index, arr){
    console.log(prev);//5, 9, 12, 14
    console.log(cur);// 4, 3, 2, 1
    return prev + cur;
});
console.log(sum);//15