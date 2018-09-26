function partition(arr, start, end) {  
  while (start >= end) {
    console.log('end')
    return
  }
  let pivotVal = arr[start],
  pivot = start,
  i = start + 1,
  temp
  while(i <= end) {
    if (arr[i] < pivotVal) {
      pivot ++
      if (pivot != i) {
        temp = arr[pivot]
        arr[pivot] = arr[i]
        arr[i] = temp
      }
    }
    i++
  }
  arr[start] = arr[pivot]
  arr[pivot] = pivotVal

  partition(arr, 0, pivot - 1)
  partition(arr, pivot + 1, end)
}

function quickOrder(arr) {
  partition(arr, 0, arr.length - 1)  
  return arr
}

let arr =  [7, 2, 8, 1, 4, 6, 9, 3, 0]
console.log(quickOrder(arr))
