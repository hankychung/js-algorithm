const Queue = require('./queue')

function Fibonacci(n) {
  if (n<1) {
    return '请输入正整数！'
  }
  let dataList = new Queue(), delItem, calItem, result = []
  for (let i=0; i<n; i++) {
    if (i<2) {
      dataList.enqueue(1)
    } else {
      delItem = dataList.dequeue()
      calItem = delItem + dataList.head()
      dataList.enqueue(calItem)
      result.push(delItem)
    }    
  }
  if (n<3) {
    return result = dataList.view()
  } else {
    return result.concat(dataList.view())
  }
}

console.log(Fibonacci(10))
