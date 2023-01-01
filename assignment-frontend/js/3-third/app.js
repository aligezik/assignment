// // // celcius to fahrenheit calculator#

// // // function calFahrenheit(cel){
// // //     const fahr =  cel * (9/5)+32
// // //     return cel + ` derece `+ fahr + ` fahrenheita esittir`
// // // }

// // // console.log(calFahrenheit(30));


// // //belirli bir string ifadenin tersini bulan fonksiyon olustur

// // // let str = 'selamlar'

// // // function reverseString(str) {
// // //     let str2 = ''
// // //     for (let i = str.length - 1; i >= 0; i--) {
// // //         str2 += str[i]
// // //     }
// // //     return str2
// // // }


// // // console.log(reverseString(`Hello world`));

// // // const string = `ali`

// // // function reverseString(str) {

// // function findVowels(str){
// //     let vowels = ''

// //     for(let i = 0; i < str.length; i++) {
// //         if(
// //             str[i] == 'a' ||
// //             str[i] == 'e' ||
// //             str[i] == 'i' ||
// //             str[i] == 'ı' ||
// //             str[i] == 'u' ||
// //             str[i] == 'ü' ||
// //             str[i] == 'o' ||
// //             str[i] == 'ö' ||
// //         ){
// //             vowels += str[i]
// //         }
// //     }
// //     return vowels
// // }
// // console.log(findVowels('hello world'));

// let str1 = "hello world";
// let str2 = 'hello world';
// let str3 = `hello world`;
// let str4 = new String("Hello World");




// console.log(str4.length);
// console.log(str4);

// let str = "Hello World"

// for(i= str.length - 1; i>=0; i--){
//     console.log(str[i]);
// }

// let ttt = "hello world I\"m developer";

// console.log(ttt.slice(10, 24));
// console.log(ttt.slice(ttt.lengt,-2));
// console.log(ttt.substring(10,24));
// console.log(ttt.substring(-3));

let scores = [15, 21, 18, 42, 17];
let dScores = scores.splice(1, 0, '13');

console.log(scores);
// console.log(dScores);

let colors = ['red', 'green', 'blue'];
let deletedColors = colors.splice(2, 0, 'purple', 'orange')

console.log(colors);
console.log(deletedColors);

//cont