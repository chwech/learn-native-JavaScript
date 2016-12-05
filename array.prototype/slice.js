//slice()方法截取数组。返回新数组。对原数组没有影响。
//一个参数时，返回从指定位置开始到数组结尾的项组成的数组
//两个参数时，返回从指定位置开始到结束位置之间项组成的数组。不包括结束位置的项。

var colors = ['white', 'black', 'red', 'blue', 'grey', 'yellow'];
var sliceColors = colors.slice(2);
console.log(sliceColors);//[ 'red', 'blue', 'grey', 'yellow' ]
console.log(colors);//['white', 'black', 'red', 'blue', 'grey', 'yellow']
var sliceColors2 = colors.slice(3, 5);
console.log(sliceColors2);//[ 'blue', 'grey' ]
console.log(colors);//['white', 'black', 'red', 'blue', 'grey', 'yellow']