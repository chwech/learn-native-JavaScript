function foo(){
    console.log(this.a);
}

var a = 2;

foo(); // 2

// ============================

function bar(){
    'use strict';
    console.log(this.b);
}

var b = 3;
bar();// undefined

//==============================

function baz(){
    console.log(this.c);
}

var c = 4;
(function(){
    'use strict';
    baz();// 4
}());