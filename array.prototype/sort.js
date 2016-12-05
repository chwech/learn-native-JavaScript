// sort()方法默认是按字符的顺序排序，一般不是我们想要的。
//可以传入一个排序函数帮助排序。

var numbers = [1, 5, 0, 10, 15];
//var sortNumbers = numbers.sort();
//console.log(sortNumbers);//[ 0, 1, 10, 15, 5 ]
//console.log(numbers);//[ 0, 1, 10, 15, 5 ]

//升序排序
function campare(value1, value2){
    if(value1 < value2){
        return -1;
    }
    else if(value1 > value2){
        return 1;
    }
    else{
        return 0;
    }
}
function compare1(value1, value2){
    if(value1 < value2){
        return 1;
    }
    else if(value1 > value2){
        return -1;
    }
    else{
        return 0;
    }
}
//var sortNumbers = numbers.sort(campare);
//console.log(sortNumbers);//[ 0, 1, 5, 10, 15 ]
//console.log(numbers);    //[ 0, 1, 5, 10, 15 ]

var sortNumbers = numbers.sort(compare1);
console.log(sortNumbers);//[ 15, 10, 5, 1, 0 ]
console.log(numbers);    //[ 15, 10, 5, 1, 0 ]

