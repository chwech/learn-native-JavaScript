/**
 * Created by chwech on 16-12-8.
 */

// 继AJAX.js

getJSON("/post/1.json").then(function(post){
    return getJSON(post.commentURL);
}).then(function funcA(comments){
    console.log("Resolved: ", comments);
}, function funcB(err){
    console.log("Rejected: ", err);
});

// arrow function
getJSON("post/1.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("Resolved: ", comments),
    err => console.log("Rejected: ", err)
);

//======================================================
// then()返回的promise的状态研究(一）
// then()返回的promise的状态与原promise对象的状态有关吗？
var p = new Promise(function(resolve, reject){
   setTimeout(resolve, 100, 'done');
   //throw new Error('test error');
});
// then方法两个参数都省略
var p1 = p.then();
console.log(p1);// Promise p1 的状态取决于 p 的最终状态

// then指定onrejected处理函数
var p2 = p.then(null, function(val){
    alert(val);
});
console.log(p2); // p2的状态是resolved, 且promiseValue继承自p1
// then指定onresolved处理函数
var p3 = p.then(function(val){
    alert(val);
});
console.log(p3);// Promise p3 的状态取决于 p 的最终状态

//===============================================================
// then()返回的promise的状态研究(二）
// then()返回的promise的状态与then参数返回的状态有关吗？
// 一个状态为resolved的promise
var pResolved = new Promise(function(resolve, reject){
    resolve('ok');
});
// 一个状态为rejeced的promise
var pRejected = new Promise(function(resolve, reject){
    reject(new Error('rejected'));
});
// then第一个参数返回的状态
var p1 = pResolved.then(function(val){
    //返回一个值
    return val + ' resolved';
});
console.log(p1);
//[[PromiseStatus]]:"resolved"
//[[PromiseValue]]:"ok resolved"

var p2 = pResolved.then(function(val){
    // 抛出一个错误
   throw new Error('rejected');
});

console.log(p2);
// [[PromiseStatus]]:"rejected"
// [[PromiseValue]]:Error: rejected

// 返回一个promise
var p3 = pResolved.then(function(val){
    // 返回一个状态为resolved的promise
    return pResolved;
});
console.log(p3);
// [[PromiseStatus]]:"resolved"
// [[PromiseValue]]:"ok"

var p4 = pResolved.then(function(val){
    // 返回一个状态为rejected的promise
    return pRejected;
});
console.log(p4);
// [[PromiseStatus]]:"rejected"
// [[PromiseValue]]:Error: rejected
//===============================================================
// then第二个参数返回的状态
var p5 = pRejected.then(null, function(val){
    return val + ' resloved';
});
console.log(p5);
// [[PromiseStatus]]:"resolved"
// [[PromiseValue]]:"Error: rejected resloved"
var p6 = pRejected.then(null, function(val){
    throw new Error('rejected');
});
console.log(p6);
// [[PromiseStatus]]:"rejected"
// [[PromiseValue]]:Error: rejected
var p7 = pRejected.then(null, function(val){
    return pResolved;
});
console.log(p7);
//[[PromiseStatus]]:"resolved"
//[[PromiseValue]]:"ok"
var p8 = pRejected.then(null, function(val){
    return pRejected;
});
console.log(p8);
// [[PromiseStatus]]:"rejected"
// [[PromiseValue]]:Error: rejected


