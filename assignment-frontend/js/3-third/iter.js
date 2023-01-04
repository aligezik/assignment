//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89]

for (let price of prices) {
  console.log(price)
}
console.log("*****")
prices.forEach((p) => console.log(p))

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0
prices.forEach((price) => (sum += price))

console.log("SUM:", sum)

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))) //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let total = 0
prices.forEach((p, i, arr) => {
  total += p
  console.log(`${i + 1}.iteration: ${total}`)
  arr[i] = Math.trunc(p * 1.1)
})

console.log(prices)

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const upperNames = names.map((n) => n.toLocaleUpperCase())

console.log(upperNames);
console.log(names);



//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//* =======================================
//*             FILTER METHOD
//* =======================================

//* =======================================
//*             REDUCE METHOD
//* =======================================

//* =======================================
//*               OTHERS
//* =======================================