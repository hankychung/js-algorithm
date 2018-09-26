const merge = require('./mergeOrdered')
function divideConquer(arr) {
  if (arr.length == 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2),
  arr1 = divideConquer(arr.slice(0, mid)),
  arr2 = divideConquer(arr.slice(mid))
  return merge(divideConquer(arr1), divideConquer(arr2))
}

let arr = [3,2,13,222,1,23,5]
console.log(divideConquer(arr))

let arr2 = [7, 2, 8, 1, 4, 6, 9, 3]
console.log(divideConquer(arr2))
