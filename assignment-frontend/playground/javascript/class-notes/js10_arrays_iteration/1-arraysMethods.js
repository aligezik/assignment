//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3]

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes(4)) //? false
console.log(numbers.includes("4")) //? true

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(3)) //? 0
console.log(numbers.lastIndexOf(3)) //? 9
console.log(numbers.lastIndexOf(7)) //? -1

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
const strNumbers = numbers.join("-")
console.log(strNumbers) //?3,5,2,4,four,3,4,bes,1,3

let data = [3, 1, 5, 7, 8, 910, 22, 3]

data = data.sort((a, b) => b - a).join(" ")
console.log(data) //?910 22 8 7 5 3 3 1

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString()) //?3,5,2,4,four,3,4,bes,1,3

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.slice(2, 3)) //? (2) ['Fiat']
console.log(cars.slice(2)) //? (2) ['Fiat', 'Anadol']
//! Tek rakam baslangic anlamina gelir ve sonuna kadar alir.

const newCars = cars.slice(3, 4)
console.log(newCars, cars) //? ['Anadol'] (4) ['BMW', 'Mercedes', 'Fiat', 'Anadol']

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
console.log(now) //? ['04.01.2023 20:36:48']

const concattedMsg = message.concat(now, "JS Arrays", [["1,3,4"]])
console.log(concattedMsg)
