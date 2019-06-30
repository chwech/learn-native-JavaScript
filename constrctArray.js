/** 
 *  2019年6月19日12:19:20
  *  a) 生成一个长度为5的空数组arr。
  *  b) 生成一个（2－32）之间的随机整数rand。
  *  c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
  *  d) 最终输出一个长度为5，且内容不重复的数组arr。
 */

let arr = []
function constrctArray () {
  if (arr.length < 5) {
    let randomNum = Math.floor(Math.random() * 30) + 2
    if (arr.includes(randomNum)) {
      return constrctArray()
    }
    arr.push(randomNum)
    constrctArray()
  }
}
constrctArray()
console.log(arr)