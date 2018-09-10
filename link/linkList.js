function LinkList() {
  // 定义节点类
  let Node = function(data) {
    this.data = data
    this.next = null      
  }
  // 定义链表的长度， 首节点和尾节点
  let length = 0, 
      head = null,
      tail = null
  // 添加节点
  this.append = data => {
    let appendNode = new Node(data)
    if (!length) {
      head = appendNode,
      tail = appendNode
    } else {
      tail.next = appendNode
      tail = appendNode
    }
    length += 1
    return true
  }
  // 删除节点
  this.remove = index => {    
    // 检查删除节点索引是否合法
    if (index >= length || index < 0) {
      console.log('illegal index!')
      return false
    }
    // 定义删除节点，数组长度减1    
    let delNode
    length -= 1
    // 删除的节点是首节点
    if (index == 0) {
      delNode = head
      head = head.next    
      return delNode.data  
    }
    // 定位删除的节点
    let indexFlag = 1, nodeFlag = head
    while (indexFlag < index) {
      nodeFlag = nodeFlag.next
      indexFlag ++
    }
    delNode = nodeFlag.next    
    if (delNode.next == null) {
      // 删除的是尾节点
      tail = nodeFlag
    } else {
      nodeFlag.next = delNode.next
    }    
    return delNode.data    
  }
  // 返回首节点
  this.head = () => head
  // 返回尾节点
  this.tail = () => tail
}

let link = new LinkList()
link.append('first')
link.append('middile')
link.append('end')
console.log(link.head())
console.log(link.head().next)
console.log(link.tail())
link.remove(2)
console.log(link.head())
console.log(link.head().next)
console.log(link.tail())


