function indentify(){
  return this.name.toUpperCase();
}

function speak(){
  return greeting = "hello, I'm " + indentify.call(this);
}

var me = {
  name: "chwech"
};

var you = {
  name: "jack"
};

console.log(speak.call(me));
console.log(speak.call(you));

console.log(indentify.call(me));
console.log(indentify.call(you));