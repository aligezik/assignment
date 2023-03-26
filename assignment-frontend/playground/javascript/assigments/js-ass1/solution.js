//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

console.log("----------------------------------")
console.log(" ***** Basit Hesap Makinasi ****** ")
console.log("----------------------------------")
const num1 = Number(prompt("First Number:"))
let operator = prompt("Operator: +,-,*, /: ")
const num2 = Number(prompt("Second Number:"))
let result = 0
if (operator === "+") {
  result = num1 + num2
} else if (operator === "-") {
  result = num1 - num2
} else if (operator === "*") {
  result = num1 * num2
} else if (operator === "/") {
  result = num1 / num2
} else {
  console.log("Incorrect operator selection ")
  operator = null //! Yanlis operator girilirse operator'a null atiliyor.
}

if (operator) {
  //! Eger operator truty bir degerse sonucu goster, Null gibi falsy ise gosterme
  console.log(`${num1} ${operator} ${num2} = ${result}`)
}

//! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
//? Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//? Cuma -> Teamwork
//? Cumartesi ->  InClass + Workshop
//? Pazar -> Self-Study
//? Aksi takdirde -> Yanlis gun girildi.

const day = prompt("Please select a day: ").toLowerCase() //! girilenleri kucuk harfe cevir
switch (day) {
  case "monday":
  case "thuesday":
  case "wednesday":
  case "thursday":
    console.log("Inclass")
    break
  case "friday":
    console.log("Teamwork")
    break
  case "saturday":
    console.log("Inclass and workshop")
    break
  case "sunday":
    console.log("Self study.")
    break
  default:
    console.log("Incorrect day")
}

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
const salary = Number(prompt("Please enter your salary"))
const minumumWage = 5500
const increasedSalary = salary >= minumumWage ? salary * 1.1 : salary * 1.5
console.log("Salary:", salary, "Increased Salary:", Math.trunc(increasedSalary))

//!ODEV4: Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const income = Number(prompt("Your Income:"))
const outcome = Number(prompt("Your Outcome:"))
const credibility =
  income - outcome >= 5500 ? "LOAN AVALAIBLE 🤑" : " LOAN NOT AVALAIBLE 🥺"
console.log(credibility)
