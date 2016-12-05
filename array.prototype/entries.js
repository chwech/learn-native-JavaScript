//entries()方法对键值对遍历。返回一个遍历器对象。可用for...of循环遍历。
let array = [1, 2, 3, 4, 5];
let iterator = array.entries();
console.log(iterator);// {}
console.log(iterator.next().value);//[0, 1]
console.log(iterator.next().value);//[1, 2]
console.log(iterator.next().value);//[2, 3]
console.log(iterator.next().value);//[3, 4]
console.log(iterator.next().value);//[4, 5]
console.log(iterator.next().value);//undefined

for(let [index, elems] of iterator){
    console.log(index, elems);
    //[0, 1]
    //[1, 2]
    //[2, 3]
    //[3, 4]
    //[4, 5]
}