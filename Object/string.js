var strPrimitive = "I'm a string";
console.log(typeof strPrimitive);//'string'
console.log(strPrimitive instanceof String);//false

var strObject = new String("I'm a string");
console.log(typeof strObject);//'object'
console.log(strObject instanceof String);//true

Object.prototype.toString.call(strObject);//[object String]
