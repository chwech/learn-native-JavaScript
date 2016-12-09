/**
 * Created by chwech on 16-12-8.
 */
// Promise.prototype.catch()是
// Promise.prototype.then(null, rejection)的别名

var p = new Promise(function(resolve, reject){
    resolve(1);
    reject(new Error('error'));
});

p.then((val) => console.log("resolve: ", val))
    .catch((err) => console.log("reject: ", err));

//等同于

p.then((val) => console.log("resolve: ", val))
    .then(null, (err) => console.log("reject: ", err));