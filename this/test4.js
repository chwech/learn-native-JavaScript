// 调用点：函数在代码中的被调用位置
// 调用栈：使我们到达当前执行位置而被调用的所有方法的堆栈
function baz(){
    // 调用栈是： 'baz'
    // 调用点是global scope (全局作用域)
    console.log('baz');
    bar();
}

function bar(){
    // 调用栈是： 'baz' -> 'bar'
    // 调用点位于 'baz'
    console.log('bar');
    foo();
}
function foo(){
    // 调用栈是： 'baz' -> 'bar' -> 'foo'
    // 调用点位于 'bar'
    console.log('foo');
}

baz();