// String.prototype.anchor()可以以字符串为文本内容创建一个指定name属性的<a>锚链接。

var anchorText = '点击查看';
var aTag = anchorText.anchor('Clickcheck');
console.log(aTag);//<a name="Clickcheck">点击查看</a>
document.body.innerHTML = aTag;

