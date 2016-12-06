/**
 * Created by chwech on 16-12-6.
 */
//=============================================================
// import命令用于加载模块，接受一个对象，对象指定要从其它模块导入的变量名
// 变量名必须与模块的对外接口名称相同
// 如果变量名有冲突，可以用as关键字重命名
import {firstName, lastName, year} from './profile';
// import {firstName as surname} from '.profile';
//==============================================================
// 执行模块而不输入任何值
import './profile';
//=============================================================
// import整体加载模块
import * as circle from './circle';
console.log("圆周长： " + circle.circumference(14));
console.log("圆面积： " + circle.area(4));
// module命令整体加载模块
module circle from './circle';
console.log("圆周长： " + circle.circumference(14));
console.log("圆面积： " + circle.area(4));

//=============================================================
// 通过export default 命令的默认输出，可以为其指定任意名字
// 这里import命令后面不使用大括号(对象)
import customName from './export-default';

// ===========================================================
// 加载继承的模块
module math from "./circleplus";
import exp from './circleplus';
console.log(exp(math.E));
// =============================================================
// ES6模块加载实质

// CommonJS加载。一旦输出变量，模块内部的变化不会影响这个值。
// var counter = require('./lib').counter;
// var incCounter = require('./lib').incCounter;
// console.log(counter);//3
// incCounter();
// console.log(counter);//3

// ES6 import加载
import {counter, incCounter} from './lib';
console.log(counter);// 3
incCounter();
consolelog(counter);// 4




