function LinkList(...args) {  
  // 定义节点类
  let Node = function(data) {
    this.data = data
    this.next = null      
  }  
  // 定义链表的长度， 首节点和尾节点
  let length = 0, 
      head = null,
      tail = null 
  // 实例化链表对象时对传入参数进行初始化
  if (args) {    
    length = args.length
    let initNode = {}
    for (let idx in args) {  
      initNode[idx] = new Node(args[idx]) 
    }    
    for (let idx in initNode) {
      if (idx == 0) {
        head = initNode[idx]
      }
      if (idx == length - 1) {
        tail = initNode[length - 1]
        break
      }   
      initNode[idx].next = initNode[parseInt(idx)+1] 
    }    
  }  
  // 判空
  function isNull() {
    if (!length) {
      console.log('链表为空！')
      return true
    }
    return false
  }
  // 获取索引节点
  this.getNode = idx => {
    if (idx<0 || idx >= length) {
      console.log('illegal index!')
      return null
    }
    let cur_node = head
    while (idx) {
      cur_node = cur_node.next
      idx--
    }
    return cur_node
  }
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
  // 删除头节点
  this.remove_head = () => this.remove(0)
  // 删除尾节点
  this.remove_tail = () => this.remove(length - 1)
  // 删除节点
  this.remove = index => {  
    if (isNull()) {
      return null
    }  
    // 检查删除节点索引是否合法
    if (index >= length || index < 0) {
      console.log('illegal index!')
      return null
    }       
    let delNode    
    // 删除的节点是首节点
    if (index == 0) {
      delNode = head
      head = delNode.next  
      delNode.next = null
      length -= 1  
      return delNode.data  
    }
    // 定位删除的节点
    let preNode = this.getNode(index - 1)      
    delNode = this.getNode(index)
    if (delNode.next == null) {
      // 删除的是尾节点
      tail = preNode
      tail.next = null
    } else {
      preNode.next = delNode.next
    }    
    delNode.next = null
    length -= 1
    return delNode.data    
  }
  // 在指定位置插入元素
  this.insert = (data, idx) => {
    // 检查插入位置的合法性
    if (idx < 0 || idx > length) {
      console.log('illegal index!')
      return null
    }    
    let insertNode = new Node(data)
    if (idx == 0) {
      // 在首节点插入元素
      insertNode.next = head
      head = insertNode
      if (length == 0) {
        tail = insertNode
      }
    } else if (idx == length) {
      // 在尾节点后一位插入元素      
      return this.append(data)
    } else {
      // 在中间任一位置插入元素
      let preNode = this.getNode(idx - 1),
      curNode = this.getNode(idx)
      preNode.next = insertNode
      insertNode.next = curNode
    }
    length += 1
    return true    
  }
  // 返回首节点
  this.head = () => head
  // 返回尾节点
  this.tail = () => tail
  // 返回指定元素的索引
  this.indexOf = data => {
    if (isNull()) {
      return false
    }
    let cur_idx = 0, cur_node = head
    while (cur_idx < length) {
      if (cur_node.data == data) {        
        return cur_idx
      }
      cur_idx += 1
      cur_node = cur_node.next
    }    
    return -1
  }
  // 返回链表长度
  this.length = () => length
  // 链表是否为空
  this.isEmpty = () => {
    if (length) {
      return false
    } else {
      return true
    }
  }
  // 清空链表
  this.clear = () => {
    length = 0
    head = null
    tail = null
  }
  // 打印链表
  this.print = () => {
    if (isNull()) {
      return
    }    
    let cur_node = head, str = '* -> '
    for (let i=0; i<length; i++) {      
      str += `${cur_node.data} -> ${i == length-1 ? '*' : ''}`
      cur_node = cur_node.next
    }
    console.log(str)
  }
}

let link = new LinkList('first', 'middle', 'end')
link.print()
link.insert('hello', 0)
link.print()
console.log(link.indexOf('middle'))
console.log(link.getNode(3))
console.log(link.head())
link.print()
console.log(link.tail())
console.log(link.isEmpty())
link.clear()
link.print()
link.insert('hello', 0)
link.print()
console.log(link.indexOf('middle'))
console.log(link.getNode(3))
console.log(link.head())
console.log(link.tail())
console.log(link.isEmpty())


