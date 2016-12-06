/**
 * Created by chwech on 16-12-6.
 */

// 模块的继承

// 此模块继承了circle.js模块。写法如下

export * from './circle';

export var e = 2.71828182846;
export default function (x) {
    return Math.exp(x);
}
