/**
 * Created by chwech on 16-11-11.
 */
//============================================
// 会修改原数组。
// copyWithin(target[,start][,end])
// target--必需。替换数据的开始位置。
// start-- 可选。开始读取数据的位置。默认为0。负值表示倒数
// end--可选。停止读取数据的位置。默认为数组的长度。负值表示倒数
// ============================
var a = [1, 2, 3, 4, 5];
var b = a.copyWithin(0, 3);
console.log(b);//[4, 5, 3, 4, 5]
console.log(a);//[4, 5, 3, 4, 5]
console.log(a === b);//true

//===============================
var c = [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
console.log(c);//[4, 2, 3, 4, 5]

var d = [1, 2, 3, 4, 5].copyWithin(0, -2, -1);
console.log(d);//[4, 2, 3, 4, 5]

var e = [].copyWithin.call({length: 5, 3:1}, 0, 3);
console.log(e);//{0:1, 3:1, length:5}
