const Stack = require('../stack/stack')

// 二叉树构造器
function BinaryTree(table) {  
  let stack = new Stack()
  // 二叉树节点构造器
  function BinaryTreeNode(data) {
    this.data = data
    this.parentNode = null
    this.lftChildNode = null
    this.rgtChildNode = null
  }  
  // 初始化
  let root = null  
  this.init = function() {
    let childFlag = 0 // 1为左子树节点标记, 2为右子树节点标记
    let node = null, father = null
    for (let i=0; i<table.length; i++) {
      // 遍历传入的广义表
      switch (table[i]) {
        // 处理数据节点
        default: {
          node = new BinaryTreeNode(table[i])
          if (!root) {
            root = node
          } else {
            father = stack.top()
            if (childFlag == 1) {
              father.lftChildNode = node
            } else {
              father.rgtChildNode = node
            }
            node.parentNode = father
          }
          break
        }
        // 处理'(', 父节点压栈, 置为左子树标记
        case '(': {
          stack.push(node)
          childFlag = 1 
          break
        }        
        // 处理',', 置为右子树标记
        case ',': {
          childFlag = 2
          break
        }        
        // 处理')', 父节点出栈, 完成此父节点的构造
        case ')': {
          stack.pop()
          break
        }        
        // 处理结束标记
        case '#':
          return
      }
    }
  }
  this.init()    
  // 前序遍历
  this.preOrder = node => {
    if (!node) {
      return
    }
    console.log(node.data)
    this.preOrder(node.lftChildNode)
    this.preOrder(node.rgtChildNode)
  }
  // 返回根节点
  this.rootNode = () => root
  // 返回节点数
  function nodeCount(node) {
    if (!node) {
      return 0
    }
    let leftCount = nodeCount(node.lftChildNode),
    rightCount = nodeCount(node.rgtChildNode)
    return leftCount + rightCount + 1
  }
  this.size = () => nodeCount(root)
  // 返回二叉树深度
  function treeDepth(node) {
    if (!node) {
      return 0
    }
    let lftDepth = treeDepth(node.lftChildNode),
    rgtDepth = treeDepth(node.rgtChildNode)
    return lftDepth > rgtDepth ? lftDepth + 1 : rgtDepth + 1
  }
  this.depth = () => treeDepth(root)
  // 查找节点
  function find(node, data) {
    if (!node) {     
      return null
    }    
    if (node.data == data) {      
      return node
    }        
    let lft = find(node.lftChildNode, data),
    rgt = find(node.rgtChildNode, data)
    if (lft) {
      return lft
    } 
    return rgt
  }
  this.findNode = data => find(root, data) 
}

// 广义表 A(B(D,E(G,)),C(,F))# 
let binTree = new BinaryTree('A(B(D,E(G,)),C(,F))#')
console.log(binTree.findNode('C'))


