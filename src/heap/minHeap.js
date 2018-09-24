// 最小堆是一个完全二叉树，开始构建！
function MinHeap(size) {
  // 私有属性，定义堆的最大容量，当前容量，存储的数据
  let maxSize = size,
  curSize = 0,
  heap = []  

  // --* 私有方法的开始 *--
  // 比较当前节点与其父节点的大小，若当前节点比其父节点小，交换位置直至当前节点为根节点或当前节点大于其父节点(参数为叶节点)
  function shift_up(curIdx) {
    let parent = Math.floor((curIdx - 1) / 2) // 找出其父节点    
    while (curIdx > 0) {
      if (heap[parent] <= heap[curIdx]) {
        break
      } else {
        let temp = heap[parent]
        heap[parent] = heap[curIdx]
        heap[curIdx] = temp
        curIdx = parent
        parent = Math.floor((curIdx - 1) / 2)
      }
    }      
  }
  // 比较当前节点与其最小子节点的大小，若当前节点比最小子节点大，交换位置直至当前节点为最后一个分支节点的子节点或小于其最小子节点(参数为分支节点)
  function shift_dowm(curIdx, latIdx) {        
    let minChild = 2 * curIdx + 1 // 初始最小节点索引为左节点的，此节点一定存在    
    while (minChild <= latIdx) {       
      if ((minChild + 1) <= latIdx && heap[minChild] > heap[minChild + 1]) {
        minChild = minChild + 1  // 对比左节点与右节点关键码的大小，获取关键码最小的子节点
      }
      // 比较最小子节点与父节点的关键码大小，若小于父节点的，进行互换，否则跳出循环
      if (heap[minChild] > heap[curIdx]) {
        break
      } else {
        let temp = heap[minChild]
        heap[minChild] = heap[curIdx]
        heap[curIdx] = temp
        curIdx = minChild          
        minChild = 2 * curIdx + 1
      }
    }
  }
  // --* 私有方法到此结束 *--

  // 初始化最小堆
  this.init = function(arr) {
    if (arr.length > maxSize) {
      console.log('传入数据量超过堆容量！')
      return false
    }    
    // 初始化堆    
    curSize = arr.length
    heap = new Array(curSize)
    for (let i=0; i<curSize; i++) {
      heap[i] = arr[i]
    }  
    // 从最后一个分支节点开始作为局部最小堆的父节点自上而下进行比较
    let curIdx = Math.floor((curSize - 2) / 2), latestIndex = curSize - 1    
    while (curIdx >= 0) {
      shift_dowm(curIdx, latestIndex)
      curIdx --
    }    
  }
  // 插入节点
  this.insert = data => {
    if (maxSize == curSize) {
      console.log('the heap is full of data!')
      return false
    }
    heap[curSize] = data
    curSize ++    
    
    let curIdx = curSize - 1
    shift_up(curIdx)
  }
  // 删除堆的最小值(移除堆顶元素)
  this.remove_min = () => {
    if (curSize == 0) {
      console.log('the heap is EMPTY!')
      return false
    }
    let min = heap[0]
    heap[0] = heap[curSize - 1]
    heap.pop()
    curSize --
    shift_dowm(0, curSize - 1)    
    return min
  }
  // 最小值
  this.min = () => {
    if (curSize == 0) {
      return null
    }
    return heap[0]
  }
  // 打印堆
  this.print = () => {
    console.log(heap)
  }
  // 堆的当前大小
  this.size = () => curSize  
}

// *-- 番外篇 - 最小堆的应用 --*
// 利用最小堆实现升序排序
function Asc(arr) {
  let sort_test = new MinHeap(arr.length), res = [], len = arr.length
  sort_test.init(arr)
  while (len > 0) {
    res.push(sort_test.remove_min())
    len --
  }
  return res
}
// 利用最小堆求Top K
function TopK(num, arr) {
  let heap = new MinHeap(num)
  for (let i=0; i<num; i++) {
    heap.insert(arr[i])
  }
  for (let i=num; i<arr.length; i++) {
    if (heap.min() < arr[i]) {
      heap.remove_min()
      heap.insert(arr[i])
    } 
  }
  heap.print()
}
// *-- end --*

let min_heap_test = new MinHeap(20)
min_heap_test.init([53, 17, 78, 9, 45, 65, 87, 23])
min_heap_test.print()
min_heap_test.insert(3)
min_heap_test.print()
min_heap_test.remove_min()
min_heap_test.print()
console.log(min_heap_test.remove_min())
min_heap_test.print()
console.log(min_heap_test.size())

// 排序(最小堆的番外篇)
console.log(Asc([10000, 53, 17, 78, 9, 45, 65, 87, 23, 1, 0, 121]))
TopK(6, [3, 0, 12, 99, 4, 321, 8, 66, 23, 1000, 333, 56, 89, 1024, 2048, 30, 119])

