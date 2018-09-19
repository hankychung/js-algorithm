let Stack = require('./stack')

function is_brackets_legal(str) {
  let stackArr = new Stack()
  
  for (let i=0; i<str.length; i++) {
    let item = str[i]
    if (item == '(') {
      stackArr.push(item) 
      continue     
    }
    if (item == ')') {
      if (stackArr.isEmpty()) {
        return false
      } else {
        stackArr.pop()
      }
    }
  }
  
  if (stackArr.isEmpty()) {
    return true
  } else {
    return false
  }
  
}

console.log(is_brackets_legal('((sd9(asd))sd(sd)((sd)))'))
console.log(is_brackets_legal('((sd9(asd)sd(sd)((sd)))'))