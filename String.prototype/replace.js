let str = 'www.baidu.com';

let newStr;

newStr = str.replace('w', 'W');

console.log(newStr);//Www.baidu.com
console.log(str);// www.baidu.com

newStr = str.replace(/w/, 'W');
console.log(newStr);//Www.baidu.com
console.log(str);//www.baidu.com

newStr = str.replace(/w/g, 'W');
console.log(newStr);//WWW.baicu.com
console.log(str);//www.baidu.com