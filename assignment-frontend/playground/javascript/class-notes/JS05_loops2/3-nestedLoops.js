// * ============================================
// *            NESTED LOOPS
// * ============================================
console.log("** NESTED FOR **")

//? 10  + 10 = 20 kere doner
// for (let row = 1; row <= 10; row++) {
//   console.log(row)
// }
// for (let col = 1; col <= 10; col++) {
//   console.log(col)
// }

let result
//? 10 x10 = 100 kere doner
let line = ""
for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    result = row * col
    line += result + "\t" //? \t : bir tab bosluk ekle
  }
  //   console.log("-")
  line += "\n" //? \n : yeni bir satira gec
  console.log(line)
}

console.log(line)
