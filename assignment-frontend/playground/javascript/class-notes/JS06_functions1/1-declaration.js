// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*****************************************/

//! Declaration
function printHello() {
  console.log("Hello")
}

printHello() //! invoke, call
printHello() //! invoke, call

//* ORNEK2:
//*****************************************/

function greet(firstName, lastName = "") {
  console.log(`Hi, ${firstName} ${lastName}`)
}

//? invoke examples
greet("Sabata", "2288")
greet("Sercan", "Yilmaz")
greet("Harold", "Mariam")

// const firstName = prompt("Your name:")
// const lastName = prompt("Your surname:")
// greet(firstName, lastName)
//? js de fonksiyonlar parameterlere degiskenleri degil onlarin degerlerinin aktarir.

greet("Ahmet")
greet("Mehmet")

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//******************************************/
// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob
//   console.log(`${name}'s age is ${age}`)
// }

function calculate(name, yob) {
  const age = new Date().getFullYear() - yob
  return `${name}'s age is ${age}`
}

//? Ornek olmasi icin yazildi.
// function x(s1, s2) {
//   return (s1 + s2) / (s1 * s2)
// }

const elif = calculate("elif", 2000)
console.log(elif)
console.log(calculate("Rose", 1990))

//* ORNEK4:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

console.log(oddOrEven(77))

function oddOrEven(num) {
  // return num % 2 ? "ODD" : "EVEN"
  return num % 2 === 0 ? "EVEN" : "ODD"

  //? Alternative
  // let result
  // if (num % 2 === 0) {
  //   result = "EVEN"
  // } else {
  //   result = "ODD"
  // }
  // return result;
}

const number = +prompt("Please enter a number to check odd or even:")
const oddEven = oddOrEven(number)
console.log(`${number} is ${oddEven}`)
