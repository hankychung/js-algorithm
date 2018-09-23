// 最小堆是一个完全二叉树
function MinHeap() {
  let maxSize = 0,
  curSize = 0,
  heap = []
  // 初始化最小堆
  this.init = function(arr) {
    // 传入原始数据
    maxSize = arr.length
    curSize = maxSize
    arr.forEach(item => {
      heap.push(item)
    })
    // 以传入节点为初始父节点开始自上而下对比父子节点的关键码(key)，若父节点比其最小子节点的关键码大，进行互换
    function shift_dowm(curIdx, latIdx) {        
      let minChild = 2 * curIdx + 1 // 初始最小节点索引为左节点的，此节点一定存在    
      while (minChild <= latIdx) {       
        if ((minChild + 1) <= latIdx && heap[minChild] > heap[minChild + 1]) {
          minChild = minChild + 1  // 对比左节点与右节点关键码的大小，若右节点的比较小，重置最小节点的索引为右节点
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
    // 从最后一个分支节点开始作为局部最小堆的父节点自上而下进行比较
    let curIdx = Math.floor((maxSize - 2) / 2), latestIndex = maxSize - 1    
    while (curIdx >= 0) {
      shift_dowm(curIdx, latestIndex)
      curIdx --
    }    
  }
  // 返回堆
  this.heap = () => heap
}

let min_heap_test = new MinHeap()
min_heap_test.init([53, 17, 78, 9, 45, 65, 87, 23])
console.log(min_heap_test.heap())
