const Stack = require('../stack/stack')

let stack = new Stack()
// 二叉树节点构造器
function BinaryTreeNode(data) {
  this.data = data
  this.parentNode = null
  this.lftChildNode = null
  this.rgtChildNode = null
}
// 二叉树构造器
function BinaryTree(table) {
  this.root = null
  this.init = function() {
    let childFlag = 0 // 1为左子树节点标记, 2为右子树节点标记
    let node = null, father = null
    for (let i=0; i<table.length; i++) {
      // 遍历传入的广义表
      switch (table[i]) {
        // 处理数据节点
        default: {
          node = new BinaryTreeNode(table[i])
          if (!this.root) {
            this.root = node
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
  this.pre_order = function(node){
    debugger
    console.log(node)
    if(node==null){
      debugger
        return;
    }
    console.log(node.data);
    this.pre_order(node.lftChildNode);
    this.pre_order(node.rgtChildNode);
  }
}

// 广义表 A(B(D,E(G,)),C(,F))# 
let binTree = new BinaryTree('A(B(D,E(G,)),C(,F))#')

binTree.pre_order(binTree.root.lftChildNode)