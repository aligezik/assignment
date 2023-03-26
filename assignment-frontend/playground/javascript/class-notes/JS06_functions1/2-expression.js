// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/

//? Cannot access 'printHello' before initialization
// printHello() //! invoke, call

//! Expression yontemi ile Fonksiyonun tanimlanmasi
const printHello = function () {
  console.log("Hello")
}

printHello() //! invoke, call
printHello() //! invoke, call

//* ORNEK2:
//*********************************************/

let oddOrEven = function (num) {
  return num % 2 === 0 ? "EVEN" : "ODD"
}

console.log(oddOrEven(5))
console.log(oddOrEven(6))

//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

const findBiggest = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let biggest = n1
  if (n2 >= biggest) {
    biggest = n2
  }
  if (n3 >= biggest) {
    biggest = n3
  }
  return biggest
}

console.log(`The Biggest:${findBiggest(2, 1, 4)}`)
console.log(`The Biggest:${findBiggest(6, 3, 2)}`)
console.log(`The Biggest:${findBiggest(55, 77, 122)}`)
console.log(`The Biggest:${findBiggest(-1, -7, 0)}`)
console.log(`The Biggest:${findBiggest(-1, -7, -12)}`)
console.log(`The Biggest:${findBiggest(-13, -5, -1)}`)

console.log(`The Biggest:${findBiggest(3, 5)}`)
console.log(`The Biggest:${findBiggest(-3, 5)}`)
console.log(`The Biggest:${findBiggest(-3, -5)}`)
console.log(`The Biggest:${findBiggest(-3, -5, 6)}`)
console.log(`The Biggest:${findBiggest(-5, -3)}`)

//* ORNEK3: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//**************************************************/
const add = function (n1, n2) {
  return n1 + n2
}
const sub = function (n1, n2) {
  return n1 - n2
}
const div = function (n1, n2) {
  return n1 / n2
}
const mul = function (n1, n2) {
  return n1 * n2
}

const compute = function (n1, n2, op) {
  let result = 0
  switch (op) {
    case "+":
      result = add(n1, n2)
      break
    case "-":
      result = sub(n1, n2)
      break
    case "/":
      result = div(n1, n2)
      break
    case "*":
      result = mul(n1, n2)
      break
    default:
      break
  }
  return result
}

console.log(compute(4, 3, "/"))
console.log(compute(2, 4, "*"))
console.log(compute(3, 1, "+"))
