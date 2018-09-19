function Queue() {
  let queue = []
  let tips = () => {
    if (!queue.length) {
      return 'the queue is EMPTY!'
    } else {
      return false
    }
  }
  // 入队
  this.enqueue = item => queue.push(item)
  // 出列并返回元素
  this.dequeue = () => tips() ? tips() : queue.shift()
  // 返回头元素
  this.head = () => tips() ? tips() : queue[0]
  // 返回尾元素
  this.tail = () => tips() ? tips() : queue[length - 1]
  // 判断列队是否空
  this.empty = () => tips() ? true : false
  // 清空队列
  this.clear = () => queue = []
  // 查看队列
  this.view = () => queue
}

module.exports = Queue
