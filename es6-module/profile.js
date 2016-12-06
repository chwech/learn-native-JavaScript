/**
 * Created by chwech on 16-12-6.
 */
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1985;

// 输出变量
export {firstName, lastName, year};

// 输出函数

export function multiply (x, y) {
    return x * y;
}

function v1(){}
function v2() {}
// as关键词重命名变量
export {
    v1 as streamV1,
    v2 as streamV2
};
