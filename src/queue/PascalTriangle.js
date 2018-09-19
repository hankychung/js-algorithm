const Queue = require('./queue')
function Triangle(n) {
  if (n<1) {
    return '请输入正整数！'
  } 
  let num = parseInt(n), list = new Queue(), delItem, pre, calItem, output
  list.enqueue(1)
  for (let i=0; i<num; i++) {
    output = ''
    pre = 0
    for (let j=0; j<=i; j++) {
      // 循环出队，并记录出队元素 - 循环结束原队列元素全部出队
      delItem = list.dequeue()
      output += delItem + ' '
      // 计算下一队列的元素值，并入队，pre置为出队元素值 - 循环结束新队列元素除了尾部的1之外全部进队
      calItem = delItem + pre      
      list.enqueue(calItem)
      pre = delItem
    }
    console.log(output)
    // 尾部补1形成下一队列
    list.enqueue(1)    
  }
}

Triangle(20)
