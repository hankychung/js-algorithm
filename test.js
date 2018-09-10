let obj = {a: '123'}
let obj2 = {a: '123'}
let sam = obj,
sam2 = obj
sam.a = 'new'
console.log(obj.a)