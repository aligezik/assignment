// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

const n = Number(prompt("Enter a number"))

let sum = 0

for (let i = 1; i <= n; i++) {
  sum += i
}
console.log("SUM:", sum)

// //? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

const num = Number(prompt("Enter a number"))

for (let j = 1; j <= num; j++) {
  const randomNum = Math.round(Math.random() * 100)
  console.log(`${j}. random number: ${randomNum}`)
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const primeNum = Number(prompt("Enter a number"))

//? Flag method
let isPrime = true

if (primeNum < 2) {
  console.log("Number should be bigger than 1 ")
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      //? Tam bolunuyorsa asal degildir
      console.log(`${primeNum} is not a prime number-${i}`)
      isPrime = false
      break
    }
  }

  if (isPrime === true) {
    console.log(`${primeNum} is a prime number`)
  }
}
