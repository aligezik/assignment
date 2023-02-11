//! ODEV1:  Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.

//? let sayiMiktari = Number(prompt("enter a number"));
// let sum = 0;

// for( i = 0; i < sayiMiktari; i++ ) {
//     let girilenSayi = Number(prompt("sayi giriniz"))
//     sum += girilenSayi;
// }
// console.log(`Girilen sayi ortalamasi: ${((sum/sayiMiktari).toFixed(2))}`);

//! ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore
//! uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

// let taban = Number(prompt("taban sayisi giriniz"));
// let us = Number(prompt("us sayisi giriniz"));

// let sonuc = 1;

// for(i = 0; i < us; i++){
//         sonuc=sonuc*taban
// }
// console.log(sonuc);

// let grade = Number(prompt("your grade"));

// while(grade < 0  || grade > 100){
//         console.log("Grade should be 0-100")
//         grade = Number(prompt("your grade: "))
// }

// console.log(`Your grade :${grade}`);

// let counter = 0
// let number = Number(prompt("enter a number"))

// while(number != 0){
//         number = Math.floor(number / 10)
//         console.log(number);
//         counter++
// }
// console.log(`Digit is count is : ${counter}`);

// KREDI ORTALAMASI HESAPLIYORUZ SONRA TEKRAR NOT GIRMEK  ISTER MI DIYE SORUYORUZ


// let again = " "
// do{
//         let avg = 0
//         const midterm  = Number(prompt("your midterm :"))
//         const final = Number(prompt("your final :"))
//         avg = 0.4 * midterm + 0.6 * final;
//         console.log(`Your score is ${avg}`);
//         again = prompt("Do you want to continue e/E")

// }while(again === "e" || again === "E");

// let result
// let line = ""

// for (let row = 1; row <= 10; row++){
//         for(let col = 1; col <= 10; col++){
//                 result = row * col
//                 line += result + "\t" // bir ta tusu ekle
//         }
//         line += "\n" // bir ta tusu ekle
// }

// console.log(line);

const cities = [
        { name: 'Los Angeles', population: 3792621 },
        { name: 'Chicago', population: 2695598 },
        { name: 'New York', population: 8175133 },
        { name: 'Houston', population: 2099451 },
        { name: 'Philadelphia', population: 1526006 }
];

//       const x = cities.filter((cities => {
//         return cities.population < 3000000;
//       }))
//       console.log(x);

//! filter sort map forEach
//       cities
//         .filter(ab => ab.population < 3000000)
//         .sort((a, b) => a.population - b.population)
//         .map((ab) => `${ab.name}:${ab.population}`)
//         .forEach((c) => console.log(c));

// What would be the output of the following three console.logs?

// function withVar() { const b = () => a; var a = 24; return b; }

// function withLet() { const b = () => a; let a = 24; return b; }

// function changingValue() { let a = 24; const b = () => a; a = 42; return b; }

// console.log(withVar()()); 
// console.log(withLet()()); 
// console.log(changingValue()()); 

//* ==============================================================

// const john = {
//         firstName: 'John',
//         lastName: `Doe`,
//         birthDay: `1970`,
//         fullName: function(){return `${this.firstName} ${this.lastName}`;},
//         age(){return new Date().getFullYear()-this.birthDay;}
// }

// console.log(john);
// console.log(john.firstName);
// console.log(john.age());



const bp = {
        firstName: `Bilge`,
        lastName: `Panter`,
        birthDay: `2018`,
        age() { return new Date().getFullYear() - this.birthDay },
        fullName: function () { return `${this.firstName} ${this.lastName} is ${this.age()} years old`; },
};
console.log(bp.fullName());

let aa = {
        firstName: 'John',
        lastName: 'Doe',
}

console.log(aa.firstName);

const a1 = new Object();
a1.