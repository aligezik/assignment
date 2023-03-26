// ? ======================================
// ?              SCOPE
// ? ======================================
console.log("******* 5 - SCOPE ********")

let sayi1 = 5 //! Global Scope
console.log(sayi1) //! 5

const fonks1 = function () {
  sayi1 = 22
  console.log(sayi1) //! 22
}
fonks1()
console.log(++sayi1) //! 23

//? --------------------------------------
const sayi2 = 7 //! Global scope

const fonks2 = () => {
  const sayi2 = 11 //! Function-scope
  console.log(sayi2) //! 11
}

fonks2()
console.log(sayi2) //!7

var sonuc = "var"
if (sayi2 === 8) {
  let sonuc = "Merhaba"
  console.log(sonuc)
} else {
  let sonuc = "Nasilsin" //! Hoisting oluyor, yani degisken global hale geliyor.
  console.log(sonuc)
}

console.log(sonuc)
