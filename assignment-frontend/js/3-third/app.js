// celcius to fahrenheit calculator#

// function calFahrenheit(cel){
//     const fahr =  cel * (9/5)+32
//     return cel + ` derece `+ fahr + ` fahrenheita esittir`
// }

// console.log(calFahrenheit(30));


//belirli bir string ifadenin tersini bulan fonksiyon olustur

// let str = 'selamlar'

// function reverseString(str) {
//     let str2 = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2 += str[i]
//     }
//     return str2
// }


// console.log(reverseString(`Hello world`));

// const string = `ali`

// function reverseString(str) {

function findVowels(str){
    let vowels = ''

    for(let i = 0; i < str.length; i++) {
        if(
            str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'i' ||
            str[i] == 'ı' ||
            str[i] == 'u' ||
            str[i] == 'ü' ||
            str[i] == 'o' ||
            str[i] == 'ö' ||
        ){
            vowels += str[i]
        }
    }
    return vowels
}
console.log(findVowels('hello world'));