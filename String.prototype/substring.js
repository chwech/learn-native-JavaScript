let string = 'hello world';
console.log(string.substring(3));//lo world
console.log(string.substr(3));//lo world
console.log(string.slice(3));//lo world

console.log(string.substring(3, 7));//lo w
console.log(string.substr(3, 7));//lo worl
console.log(string.slice(3, 7));//lo w

// 第一个参数为负值时，
// substring会将负数转换为0
// slice和substr会将负数用length相加
console.log(string.substring(-3));//hello world  => string.substring(0)
console.log(string.substr(-3));//rld => string.substr(8)
console.log(string.slice(-3));//rld => string.substr(8)


console.log(string.substring(3, -7));//hel => string.substring(3, 0) => string.substring(0, 3)
console.log(string.substr(3, -7));//'' => string.substr(3, 0) 第二个参数表示返回的字符串个数
console.log(string.slice(3, -7));//l => string.slice(3, 4)