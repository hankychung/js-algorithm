let val = 0, val2 = 0, val3 = 0
val = val | 1<<0
val = val | 1<<32
for (i=0;i<32;i++) {
  val2 = val2 | 1<<i
}
for (i=0;i<33;i++) {
  val3 = val3 | 1<<i
}
console.log(val)
console.log(val2)
console.log(val2 << 1)
console.log(val3)

console.log(val2 | val)
