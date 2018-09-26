// 合并两个有序序列(默认升序)
function merge(arr1, arr2, dir) {
  let res = [], i1 = 0, i2 = 0
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      res.push(arr1[i1])
      i1 ++
    } else {
      res.push(arr2[i2])
      i2 ++
    }
  }
  let rest = []
  if (i1 != arr1.length) {
    rest = arr1.slice(i1)
  } 
  if (i2 != arr2.length) {
    rest = arr2.slice(i2)        
  }
  return rest.length ? res.concat(rest) : res
}

// let a1 = [1, 4, 6, 9]
// let a2 = [2, 3, 10, 14, 80]
// console.log(merge(a1, a2))
module.exports = merge
