function BitMap() {
  let map = {}, row, posInRow; 
  this.add = (...arr) => {  
    arr.forEach(item => {
      row = Math.floor(item / 32);
      posInRow = item % 32;
      if (!map[row]) {
        map[row] = 0
      }
      map[row] = map[row] | 1 << posInRow;
    });
    console.log(map);
  };
  this.isExist = item => {
    row = Math.floor(item / 32);
    if (!map[row]) {
      return false
    }
    posInRow = item % 32;
    result = map[row] & 1 << posInRow;
    if (result) {
      return true
    } else {
      return false
    }
  };
};

let bit_map = new BitMap();
bit_map.add(123, 1, 31, 21312312)
bit_map.add(32, 2)
console.log(bit_map.isExist(1))
console.log(bit_map.isExist(2))
console.log(bit_map.isExist(3))
console.log(bit_map.isExist(21312312))
console.log(bit_map.isExist(123))
console.log(bit_map.isExist(32))
console.log(bit_map.isExist(0))
bit_map.add(0)
console.log(bit_map.isExist(0))
