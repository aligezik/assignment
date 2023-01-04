// // ?==============================================
// // ?            DIZILER (ARRAYS)
// // ?==============================================

// console.log("***** ARRAYS ******")

// //* Dizi Tanimlama
// //*-----------------------------------------------

// // ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
// const names = ["emir", "oğuzhan", "levent", "tarik"]

// console.log(names)

// //? 4 (names dizisinin lenght property'sine erisiyoruz.)
// //* non-primitive verilerde ozellikler olabilir ve bunlara
// //* erisim . notasyonu ile olabilir.
// console.log(names.length)

// const x = 5.234 //? primitive
// console.log(x.toFixed(2)) //? object wrapper sayesinde
// //? Primitive'lerde normal sartlarda property olmaz.

// //? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
// //? primitive verileri bir obje sarmlayicisi ile sarmalar.

// console.log(typeof names) //? JS de array aslinda object dedigimiz base object'den turetilmistir.

// const emptArr = []
// console.log(emptArr)

// // ! 2.Yöntem (Object Constructor)
// const codingLangs = new Array("C", "C++", "JS", "Go")
// console.log(codingLangs)

// const numbers = new Array(3, 2, 1)
// console.log(numbers) //? (3) [3, 2, 1]

// //? 10 elemanli bos bir dizi olusturur.
// const numbers1 = new Array(10)
// console.log(numbers1) //?(10) [empty × 10]

// // ! 3.Yöntem (Array.of())
// const number2 = Array.of(1, 2, 3)
// console.log(number2) //?(3) [1, 2, 3]

// const numbers3 = Array.of(5)
// console.log(numbers3) //? [5]

// //* Diziden Veri Okuma-Yazma (indisleme)
// //* ----------------------------------------------
// //!  Diziden veri okuma

// //? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
// //? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
// //? kadar devam eder.
// //? Syntax => diziAdi[indis]

// const names1 = [
//   "emir",
//   "oğuzhan",
//   "levent",
//   "tarik",
//   "Sabata",
//   "Mehtap",
//   "Rose",
// ]
// console.log(names1[1]) //? oğuzhan
// const tarik = names1[3]
// console.log(tarik) //?tarik

// //? Dizinin en son elemanini okumak istiyoruz.
// console.log(names1[5]) //? Mehtap, (hard-coded)

// const lastEl = names1[names1.length - 1]
// console.log(lastEl) //? Rose

// //? Alternative olarak at() metodu
// console.log(names1.at(-3)) //? Sabata

// //!  Diziye veri yazma
// names1[2] = "Levent"
// // names1[2] = names1[2].toUpperCase()
// //? assigning yapildiginda etki eder.

// console.log(names1)

// //! Identifier 'names' has already been declared
// // const names = ["ismet", "canan"]

// // names = ["ismet", "canan"] //! Assignment to constant variable.

// //! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
// //! degisitirilebilir. Cunku diziler non-primitive verilerdir.
// //! const ile tanimlanan bir dizinin referansi (baslangic adresini)
// //! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
// //! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
// //! degistirmek mumukundur.
// //! const, sadece dizinin stackte tutulan adresinin degistirilmesini engeller.

// //! Diziler farkli veri tiplerini bir arada saklayabilir.
// const ageArr = [22, 44, 55]
// const people = [
//   "John",
//   "Varmont",
//   new Date().getFullYear() - 1990,
//   true,
//   ageArr,
// ]

// console.log(people[4]) //?(3) [22, 44, 55]

// console.log(++people[4][1]) //? 45

// console.log(people) //?(3) [22, 45, 55]
// console.log(ageArr) //?  ['John', 'Varmont', 33, true,  [22, 45, 55]]
// ageArr[0]--

// console.log(people) //?(5) ['John', 'Varmont', 33, true, [21, 45, 55])]

// //! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
// //! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
// //! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
// //! Cunku JS cogu durumda sig (shallow copying) yapar.
// //?================================================
// //?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
// //?================================================

// //** pop() son elemani siler ve sildigi elemani dondurur.
// const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
// console.log(cars.pop())
// console.log(cars)

// //* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
// console.log("LEN:", cars.push("Lexus"))
// console.log(cars)

// // cars.push = "hyundai" //? diziye yeni bir properyt(degisken) eklendi
// // console.log(cars)
// // // console.log(cars.push)

// // //* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
// // console.log(cars.unshift("Togg"))
// // console.log(cars)

// // //* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
// // console.log(cars.shift())
// // console.log(cars)

// // //* splice()
// // //? 1.parametre: eklenecek indis numarasi
// // //? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
// // //? 3.parametre: yeni eklenecek veri

// // cars.splice(1, 0, "VW")
// // console.log(cars) //?(5) ['BMW', 'VW', 'Mercedes', 'Fiat', 'Lexus']

// // cars.splice(3, 1, "Maseratti")
// // console.log(cars)

// // //?================================================
// // //?             DIZI ERISIM METOTLARI
// // //?================================================

// // cars.reverse()
// // console.log(cars);
// //  const numaralar = [1, 12, 4233, 345, 5677, 33]

// // console.log(numaralar);
// // console.log(numaralar.sort());

// // numaralar.sort()
// const arr = [-5, 15, 22, -4, 45, 78];

// let negatives = [];
// let positives = [];
// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] < 0){
//     negatives.push(arr[j]);
//   }
//   else{
//     positives.push(arr[j])
//   }
// }

// console.log(positives);
// console.log(negatives);


// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"]

// const findStudent = (name) => {
//   let counter = 0
//   for (let i in students) {
//     if(name.toLowercase() === students[i]){
//       counter++
//     }
//   }

//   if (counter === 0){
//     return `${name} can not be found`
//   }else{
//     return `${name} found ${counter} times`

//   }
// }

// console.log(findStudent("mehmet"));
// console.log(findStudent("ismet"));
// console.log(findStudent("feyza"));

// //* ============================================
// //*                FOR LOOP
// //* ============================================

// console.log("******* LOOPS IN ARRAYS ******")

// //?-------------- ÖRNEK -------------------
// //? grades'in ortalamasini hesaplayiniz.
// const grades = [55, 77, 23, 89, 100, 44, 33]
// let sum = 0
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i]
// }

// console.log((sum / grades.length).toFixed(2))
// //?-------------- ÖRNEK -------------------
// //? arr dizisindeki negatif ve positif sayilari
// //? 2 ayri diziye kaydediniz.
// const arr1 = [-5, 15, 22, -4, 45, 78]

// let negatives1 = []
// let positives1 = []
// for (let j = 0; j < arr1.length; j++) {
//   if (arr1[j] < 0) {
//     negatives1.push(arr1[j])
//   } else {
//     positives1.push(arr1[j])
//   }
// }

// console.log(negatives1)
// console.log(positives1)
// console.log(arr1)

//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"]

const findStudent = (name) => {
  let counter = 0
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++
    }
  }

  if (counter === 0) {
    return `${name} can not be found`
  } else {
    return `${name} found ${counter} times`
  }
}

console.log(findStudent("MehMet"))
console.log(findStudent("ismet"))
console.log(findStudent("feyza"))

//* =========================================
//*            FOR-OF LOOP
//* =========================================

const findStundentForOf = (name) =>{
  let counter = 0

  for (let student of students){

    student === name.toLowerCase() ? counter++ : null
    
    
    student === name.toLowerCase() && counter++
    // student === name.toLowerCase() || counter--
  }
}

