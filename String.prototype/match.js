// String.prototype.match(RegExp);
//本质上与调用RegExp.prototype.exec(string)方法相同，返回的结果一样。

var text = "cat, bat, sat, fat";
var pattern = /.at/;

var regexp = pattern.exec(text);
console.log(regexp);//[ 'cat', index: 0, input: 'cat, bat, sat, fat' ]
//数组的第一项是与模式匹配的字符串
var matches = text.match(pattern);
console.log(matches);//[ 'cat', index: 0, input: 'cat, bat, sat, fat' ]
console.log(matches.index);//0
console.log(matches[0]);//cat
console.log(pattern.lastIndex);//0
