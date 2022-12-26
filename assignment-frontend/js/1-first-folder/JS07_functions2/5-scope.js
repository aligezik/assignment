// ? ======================================
// ?              SCOPE
// ? ======================================
console.log("******* 3 - SCOPE ********")


// const a = +(prompt("enter your first number"))
// const b = +(prompt("enter your second number"))

// let sum = () => a + b;
// let sum2 = () => 25*(2*a + b);

// console.log(sum());
// console.log(sum2());

// const daireninAlani = (r) => Math.PI*r*r
// console.log(daireninAlani(6).toPrecision(4));

// const calculateAge = (year) => new Date().getFullYear()-year;
// console.log(calculateAge(1990));

// const bmi = (w,h) => (w/(h*h))

// const age = +(prompt("How old are you?"))

// if(age >= 20){
//     let x = bmi(80, 1.75)
//     if ( x <= 18.5 ){
//         console.log("under weight");
//     }else if ( x>18.5 && x<=24.9 ){
//         console.log("Normal weight");
//     }else if ( x>25 && x<=29.9 ){
//         console.log("Overweight");
//     }else{
//         console.log("Obese");
//     }

// }
// else{
//     console.log("your age is not enough for this");
// }
//  console.log(bmi(77, 1.77));

const faktoriyel = (n) =>{
    if(n==0){
        return 1
    }else if (n<0){
        return prompt("Enter a positive number")
    }else{
        return n*faktoriyel(n-1)
    }
}
console.log(faktoriyel(6));

const toplayalim = (a) =>{
    if(a==0){
        return "0"
    }else if(a<0){
        return prompt("Enter a positive number")
    }else{
        return (a*(a+1))/2
    }
}
console.log(toplayalim(10));

let b = 15; 
const func1 = () =>{
   b = 45
   console.log(b);
}

func1();
console.log(b);


y = "mehmet"

if(y === "mehmet"){
    var y = "ahmet"
    console.log("dogru kisi");
}else{
    console.log("yanlis kisi");
}
console.log(y);