// Storage的实例有sessionStorage,localStorage,globalStorage的每个属性。
// 实例可以使用以下方法
// setItem()
// getItem()
// removeItem()
// clear()
// key(index)
// length属性
sessionStorage.setItem('name','chwech'); //设置数据
sessionStorage.setItem('age', '24');
sessionStorage.setItem('firstName', 'chen');
console.log(sessionStorage.length);//3
console.log(sessionStorage.key(2));//name  获得index为2的key名
console.log(sessionStorage.getItem('name')); //chwech
sessionStorage.removeItem('name');//移除key为‘name’的数据
console.log(sessionStorage.length);//2
sessionStorage.clear();//删除所有值
console.log(sessionStorage.length);//0

