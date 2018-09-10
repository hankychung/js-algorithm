function Stack() {
  // 定义栈
  let stackArr = []
  // 压栈
  this.push = item => {
    stackArr.push(item)
  }
  // 出栈并返回元素值
  this.pop = () => {
    if (stackArr.length == 0) {      
      return 'the stack is already EMPTY!'
    }
    return stackArr.pop()
  }
  // 查看栈顶元素
  this.top = () => {
    if (stackArr.length == 0) {
      return 'the stack is EMPTY!'
    }
    return stackArr[stackArr.length - 1]
  }
  // 查看栈的长度
  this.size = () => stackArr.length
  // 查看栈是否已空
  this.isEmpty = () => stackArr.length == 0 ? true : false
  // 清空栈
  this.clear = () => stackArr = []
}

module.exports = Stack
