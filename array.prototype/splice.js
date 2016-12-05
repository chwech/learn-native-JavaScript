// splice()，返回值为删除的项组成的数组

//删除
// 指定两个参数，第一个参数为要删除项的位置，第二个是要删除项的个数。
var colors = ['red', 'blue', 'green'];
var remove = colors.splice(1, 1);//删除第二项
console.log(colors);//['red', 'green']
console.log(remove);//['blue']

//插入
// 指定三个参数，第一个参数为要插入项的起始位置，第二个参数为0（要删除的项数），
// 第三个参数为插入的项，可以是多项。
var newColors = colors.splice(1, 0, 'blue', 'yellow');
console.log(newColors);//[]
console.log(colors);//[ 'red', 'blue', 'yellow', 'green' ]

//替换
// 指定三个参数，第一个参数为要替换的起始位置，第二个参数为要删除的项数，
// 第三个参数为插入的项，可以是多项。
var replaceColors = colors.splice(2, 1, 'black');
console.log(replaceColors);//['yellow']
console.log(colors);//[ 'red', 'blue', 'black', 'green' ]


