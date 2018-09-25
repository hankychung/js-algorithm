let BinaryTreeNode = require('./binTree').node

function BinSearchTree() {
  // *-- 私有方法 --*
  // 从节点开始向下对比关键码
  function shift(curNode, node) {
    if (curNode.data == node.data) {
      console.log('the data is already existed!')
      return false
    } 
    // 插入节点关键码若比对比节点的大，进入对比节点的右子节点进行下一步判断
    if (curNode.data > node.data) {
      if (node.rgtChildNode) {
        return shift(curNode, node.rgtChildNode) // 有右子节点则继续递归调用shift直至插入节点被赋值或被发现与节点关键码相同
      } else {
        node.rgtChildNode = curNode // 无右子节点则直接赋值右子节点为插入节点，结束shift对比
      }
    } else {
      if (node.lftChildNode) {
        return shift(curNode, node.lftChildNode)
      } else {
        node.lftChildNode = curNode
      }
    }
    curNode.parentNode = node
    return true
  }
  // 根据关键码查找节点
  function search(data, node) {
    if (node.data == data) {
      return node
    }
    if (node.data > data) {
      return node.lftChildNode ? search(data, node.lftChildNode) : null
    } else {
      return node.rgtChildNode ? search(data, node.rgtChildNode) : null
    }
  }
  // *-- 私有属性 --*
  let root = null
  // *-- Api --*
  // 插入节点
  this.insert = data => {
    let newNode = new BinaryTreeNode(data)
    // 判断是否有根节点，没有则直接赋值给根节点，否则进行节点关键值判断
    if (!root) {
      root = newNode
      return true
    } 
    return shift(newNode, root)
  }
  // 返回根节点
  this.rootNode = () => root
  // 根据关键码搜索节点
  this.findNode = data => {
    if (!root) {
      return null
    }
    return search(data, root)
  }
}

let searchTree = new BinSearchTree()
let arr = [19, 27, 40, 35, 25, 10, 5, 17, 13, 7, 8]
arr.forEach(item => {
  console.log(searchTree.insert(item))
})
console.log(searchTree.rootNode())
console.log(searchTree.findNode(10))
console.log(searchTree.findNode(1))

