// const colors = [
//     "Red",
//     "Blue",
//     "Yellow"
//   ];
//   let colors1 = Array(3)
//   console.log(colors1);
//   console.log(typeof colors1);
//   console.log(typeof colors);

// const num = [1, 0, 111, 23, 2, 222, 3, 309, 33];
// const num1 = {firstName:"John", lastName:"Doe", age:24};
// console.log(num[2]);


// console.log(typeof num);
// console.log(Array.isArray(num));
// console.log(num instanceof Array);

// let dailyActivities = ['eat', `work`, `sleep`]

// const newLength = dailyActivities.push(`exercise`);

// console.log(dailyActivities);
// console.log(newLength);
// console.log(dailyActivities.length);
// const newwLength = dailyActivities.pop();
// const newwwLength = dailyActivities.shift();
// console.log(dailyActivities);

// const newKLenght = dailyActivities.unshift('get dresses')

// console.log(newKLenght);
// console.log(dailyActivities);

// const newmLenght = dailyActivities.unshift('first')
// console.log(newmLenght);
// console.log(dailyActivities);

// dailyActivities[1] = `changed`
// console.log(dailyActivities);

// console.log(num); 
// console.log(num1);

// const nums = num.concat(num1, "1asd");

// console.log(nums);
// console.log(nums.reverse());
// console.log(dailyActivities.join(", "));


// num2 = dailyActivities.reverse();
// console.log(nums.reverse());
// console.log(nums);

// console.log(num.sort());

// num.sort( function(a, b){
//     if(a<b) return -1;
//     if(a>b) return 1;
//     return 0;
// });

// console.log(num);

// let colors2 = ['red', 'green', 'blue', `2213`];
// let deletedColors = colors2.splice(2, 1, 'purple', 'orange');
// console.log(colors2); 
// console.log(deletedColors);

// const colors3= [0, "Green","Red" ,"Yellow", "Green", "Blue", "Pink", "Green", "Blue", "Pink", "Green", "Green"];

// console.log(colors3.lastIndexOf("Green")); // 5

// console.log(colors3.lastIndexOf("Green",3)); // 2

// console.log(colors3.lastIndexOf("green")); // -1



const lenght = 3;
const height = 4.5;



/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = width * length;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2*(width+length)
    return perimeter;
}

console.log(getArea);
let a; 

console.log(Boolean(a));

const b = "0"; 
console.log(typeof b);
console.log(Boolean(b));

var x = 10 / `a`;
console.log(Boolean(x));

// console.log("foo" + + + +"bar")

// const getButton=document.querySelector("button");
// getButton.addEventListener("click",function(){
// const divEl=document.querySelector("div");
// const yas =document.querySelector("input[name='yas']").value; 
//  let result=2020-yas; 
//  divEl.innerHTML= `Yaşınız ${result}`; 
  
// //input sadece number olmalı string olmamalı bunu sağlayan kodu ifin içerisine yazınız yazınız
//  if(typeof yas == 'string'){
//     divEl.innerHTML= `Sadece Sayı Giriniz`;
//  }
  
  
// if(result<0){
//   divEl.innerHTML= `Yaşınız - sayı olamaz`;
// }
//   if(result>110){
//     divEl.innerHTML= `Ölmüş olmalıydınız`;
   
//   }

// });

const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21

const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>";

// document.body.innerHTML = kisi;
// console.log(kisi);

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+kitap.ad+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+kitap.yazar+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+kitap.tarih+"</td>"+
      "</tr>"+
   " </tbody>"+
    
  "</table>"
  
        
//   document.body.innerHTML = bookTable
// console.log(bookTable);

let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"

lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(lastName);
let domain = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java", "JavaScript");
console.log("Language değeri: "+language);

let url = "www.kodluyoruz.org";
let language2 = "Java";

console.log(url.indexOf("."));
//Önce indexOf kullanarak "noktanın" yerini öğrendik.
domain = url.slice(0+4)
//3+1 olması "noktadan" sonrasını al demek.
console.log(domain)