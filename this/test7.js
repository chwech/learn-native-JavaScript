function foo(){
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo;
var a = 'oops, global';

bar();

//============================
function foo1(){
    console.log(this.b);
}
function doFoo(fn){
    fn();// <- 调用点
}

var obj1 = {
    b: 2,
    foo1: foo1
};
var b = 'oops, global';
doFoo(obj.foo);// 'oops, global'

function foo2(){
    console.log(this.c);
}
var obj2 = {
    c: 2,
    foo2: foo2
};
var c = 42;
setTimeout(obj2.foo2, 10); //42
