// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

/* let str1 = "This is a string"
let str2 = 'This is a string'
let str3 = `This is a string`
let str4 = new String("This is a string")

// console.log(typeof str1) // string
// console.log(typeof str2) // string
// console.log(typeof str3) // string
// console.log(typeof str4) // object
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4) */

/* let str1 = "Clarusway"
let str2 = 'Full Stack'
let str3 = ""
let str4 = str1 + " " + str2
console.log(str1.concat(" ",str2))
console.log(str4)

console.log(str1.length) // 9
console.log(str2.length) // 10
console.log(str3.length) // 0
console.log(str4.length) // 20 */

// let str = 'Hello World'
// let str2 = `'Hell"o" "World'`

// console.log(str[str.length-1])
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])

//str nin tüm elemanları for döngüsü ile yazdır

/* for(i = 0; i< str.length;i++){
    console.log(str[i]);
} */

//str nin tüm elemanları for döngüsü ile tersten yazdır

/* for(i = str.length-1; i>= -2 ;i--){
    console.log(str[i],i);
}
 */


/* let a = 5;
let b = a;

console.log({a},{b})

a = 10;
b = a

console.log({a},{b}) */


//Escape Sequences

// alert("Merhaba\tDünya")
/* console.log("Merhaba\tDünya")
console.log('merhaba \nDünya')
console.log('merhaba\0Dünya')
console.log('merhaba\nDünya')
console.log(`merhaba



Dünya`) // Back tick ile istenildiği gibi boşluk verilir.
 */

// let str1 = "Clarusway";

// console.log(str1.slice(1,5))
// console.log(str1.substring(1,5))
// console.log(str1.substring(5,1))
// console.log(str1.slice(-8,-4))
// console.log(str1.substring(str1.length -4)) // son 4 karakteri al
// console.log(str1.substring(0,2))
// console.log(str1.substring(2))
// console.log(str1.slice(-5,8))
// console.log(str1.slice(5))
// console.log(str1)

// let str2 = str1.slice(1,5)
// console.log({str2})

//concat()
// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" Cohort 13 ", str2, " JS Session 8 ", str3)
// console.log({result},{str1})

//includes() // boolean değer döndürür true veya false

// let email = 'mark.m@clarusway'
// let email = 'mark.mclarusway'

// console.log(email.includes('@'))

// if(email.includes('@')){
//     console.log('Email is valid')
// }else{
//     console.log('Invalid email')
// }

//indexof() // numeric değer döndürür varsa indexini yoksa -1 döndürür
// console.log(email.indexOf('@'))
// if(email.indexOf('@') !== -1){
//     console.log('Email is valid')
// }else{
//     console.log('Invalid email')
// }


// let email = 'mark.m@claruswa@y.com'

// console.log(email.indexOf('@',email.indexOf('@')+1))
// console.log(email.indexOf('.com', email.indexOf('@')+1))

/* let str = 'You do not KNOW what you do not know until you know.';

console.log (str.indexOf("know",str.indexOf("know")+1));
console.log (str.indexOf("KNOW")); */


//lastIndexOf Sağdan sola doğru arar, ilk bulduğunun indexini getirir bulamazsa -1 gelir
/* let str = 'You do not KNOW what you do not know until you know.';

console.log(str.lastIndexOf('t'))
console.log(str.lastIndexOf('t',38)) */

//search()

/* let str = 'You do not KNOW what you do not know until you know.';

console.log (str.search("knowt"));  // -1
console.log (str.search("know"));  // 32

console.log (str.search(/know/)); // 32 with regular expression

console.log (str.search(/know/i)); // 11 (i means not case sensitive) */

//replace()

/* let str = "Mr Brown has a brown house and a brown car";

let newStr = str.replace("brown", "red");
// let newStr2 = str.replace(/brown/i, "red");
// let newStr2 = str.replace(/brown/g, "red");
let newStr2 = str.replace(/brown/ig, "red");
// let newStr3 = str.replace("brown", "red");

console.log(newStr);
console.log(newStr2);
// console.log(newStr3);
// console.log(str); */

//split() Stringi bölerek array yapar

/* let str = "Welcome to : Full Stack";

// console.log(str.split())
// console.log(str.split('',10))
// console.log(str.split(' '))
// console.log(str.split(',')) // içinde yoksa tamamını tek array yapar
// console.log(str.split('Welcome'))
// console.log(str.split('Full'))

let arr = str.split('Full')
console.log(arr.join('')) */

//toLower and Upper Cases

// let str = "Welcome to : Full Stack";
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

/* let trStr = "Günaydın Hayırlı işler"
let trStr2 = 'GÜNAYDIN HAYIRLI İŞLER'

// console.log(trStr.toLowerCase())
console.log(trStr.toUpperCase()) 
// console.log(trStr.toLocaleLowerCase('tr'))
console.log(trStr.toLocaleUpperCase('tr'))

console.log(trStr2.toLowerCase()) 
console.log(trStr2.toLocaleLowerCase('tr'))
console.log(trStr2.toLocaleLowerCase())

let x = prompt('Kullanıcı adınızı giriniz').toLowerCase()

console.log(x)
 */

//trim ()

// let x = prompt('Kullanıcı adınızı giriniz').toLowerCase().trim().split(' ')
// // let str = '      Welcome to the real world           '
// // console.log(str)
// // console.log(str.trim())
// // console.log(str.trimStart())
// // console.log(str.trimEnd())

// console.log(x)


//startrswith

let str = "clarusway@Clarusway.com is our e-mail address";

console.log(str.startsWith("clarusway")) // true
console.log(str.startsWith("Clarusway".toLowerCase())) // false

console.log(str.startsWith("Clarusway", 10)) // true 10. index belirtilen değerle mi başlıyor


Endswith
let str2 = "clarusway@Clarusway.com is our e-mail address";

console.log(str2.endsWith("address")) // true

console.log(str2.endsWith("Clarusway", 19)) // true
