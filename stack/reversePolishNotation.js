const Stack = require('./stack')

let exp = ['220','2','6','+','6','5','*','-','/']

function calRPN(exp) {
  let operator = ['+', '-', '*', '/']
  let numList = new Stack()
  let isLegal = true
  exp.forEach(item => {
    if (operator.indexOf(item) === -1) {
      numList.push(item)
    } else {
      if (numList.size() < 2) {
        return isLegal = false
      }
      let num1 = numList.pop(), num2 = numList.pop()
      let calNum = parseInt(eval(num2 + item + num1))
      numList.push(calNum)
    }
  })
  if (!isLegal || numList.size() > 1) {
    return 'exp is ILLEGAL!'
  }
  return numList.top()
}

console.log(calRPN(exp))