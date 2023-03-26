//! ODEV1:  Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.
const n = Number(prompt("How many number will be inputted:"))
let avarage

for (let i = 1; i <= n; i++) {
  const number = Number(prompt(`Please enter ${i}. number:`))
  avarage += number
}

console.log(`Avarage: ${avarage / n}`)

//! ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore
//! uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

const num = Number(prompt("Please enter the num:"))
const pow = Number(prompt("Please enter the positive power:"))
let result = 1

for (let i = 0; i < pow; i++) {
  result *= num
}

console.log(`${num}^${pow} = ${result}`)

//! ODEV3 (ZOR): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

let number = Number(prompt("Please enter the num:"))
let count = 0

while (number != 0) {
  number = Math.trunc(number / 10)
  count++
}

console.log(`Digit count is ${count}`)
