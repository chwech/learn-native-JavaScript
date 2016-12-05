function foo(){
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();//2

// =========================
function bar(){
    console.log(this.a);
}
var obj2 = {
    a: 42,
    bar: bar
};
var obj3 = {
    a: 2,
    obj2: obj2
};
obj3.obj2.bar();//42
