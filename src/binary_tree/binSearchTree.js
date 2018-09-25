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
  // 返回节点下的最后一个左子节点
  function findLatLftSon(node) {
    if (!node.lftChildNode) {
      return node
    }
    return findLatLftSon(node.lftChildNode)    
  }
  // 删除叶节点
  function delLeafNode(del_node) {
    // 判断删除节点是其父节点的左子节点还是右子节点
    if (del_node.parentNode.lftChildNode) {
      del_node.parentNode.lftChildNode = null
    } else {
      del_node.parentNode.rgtChildNode = null
    }
    del_node.parentNode = null
    return true
  }
  // 删除只有一个子节点的父节点
  function delSingleSonNode(del_node, son_node) {
    if (del_node.parentNode) {
      let parent_node = del_node.parentNode
      if (parent_node.lftChildNode.data == del_node.data) {
        parent_node.lftChildNode = son_node
      } else {
        parent_node.rgtChildNode = son_node
      }
      son_node.parentNode = parent_node     
    } else {
      root = son_node
      root.parentNode = null
    }        
    del_node.parentNode = null 
    del_node.lftChildNode = null
    del_node.rgtChildNode = null
    return true
  }
  // 删除有左右子节点的父节点
  function delChildrenNode(node) {
    // 返回将要删除节点的右子树的最后一个左子节点
    let latLftSon = findLatLftSon(node.rgtChildNode)
    console.log(latLftSon)
    // 对将要删除节点的数据赋值为其最后一个左子节点的数据
    node.data = latLftSon.data
    // 判断最后的左子节点是否拥有右子节点，调用对应的方法删除之
    if (latLftSon.rgtChildNode) {
      return delSingleSonNode(latLftSon, latLftSon.rgtChildNode)
    } 
    return delLeafNode(latLftSon)
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
  // 根据关键码删除节点
  this.delNode = data => {
    let del_node = this.findNode(data)
    if (!del_node) {
      return false
    }    
    // 删除的节点为叶节点
    if (!del_node.lftChildNode && !del_node.rgtChildNode) {
      return delLeafNode(del_node)
    }
    // 删除的节点拥有左子树
    if (del_node.lftChildNode && !del_node.rgtChildNode) {
      return delSingleSonNode(del_node, del_node.lftChildNode)
    }
    // 删除的节点拥有右子树
    if (del_node.rgtChildNode && !del_node.lftChildNode) {
      return delSingleSonNode(del_node, del_node.rgtChildNode)
    }
    // 删除的节点拥有左右子树
    return delChildrenNode(del_node)
  }
}

let searchTree = new BinSearchTree()
let arr = [19, 27, 40, 35, 25, 10, 5, 17, 13, 7, 8, 20, 26, 24, 22]
arr.forEach(item => {
  console.log(searchTree.insert(item))
})
console.log(searchTree.rootNode())

console.log(searchTree.delNode(19))
console.log(searchTree.rootNode())

console.log(searchTree.delNode(10))
console.log(searchTree.rootNode())


// let searchTree = new BinSearchTree()
// let arr = [19, 27, 40]
// arr.forEach(item => {
//   console.log(searchTree.insert(item))
// })

// console.log(searchTree.rootNode())
// console.log(searchTree.delNode(19))
// console.log(searchTree.rootNode())
