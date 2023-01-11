let email = "aligezik@gmail.com"
let firstName = "Ali"
let lastName = "Gezik"

console.log(email.length);

console.log(firstName[0]);
console.log(firstName.charAt(1));
console.log(firstName[2]);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(email.search("@")); //? baslangic indexi
console.log(email.search("#")); //! yeri yoksa -1 gelir

console.log(email.slice());
console.log(email.slice(email.search("@")+1));
console.log(email.slice(0, (email.search("@"))));

let DOMAIN = email.slice(email.indexOf("@")+1, email.indexOf("."))

console.log(email.indexOf("."));
console.log(DOMAIN);

console.log(email.replace(DOMAIN, "bilgepanter"))
email = email.replace(DOMAIN, "bilgepanter")

console.log("\n++++\n\nartik yeni domain\n\n++++\n \n");

console.log(email);

console.log(email.includes("@")); //! sadece boolean deger verir


console.log(email.endsWith("com"));
console.log(email.startsWith("com"));

let fullName = `
${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}
`

console.log(fullName);

console.log(document.URL);

console.log(document.head);
console.log(document.title);
console.log(document.body);

document.body.style.backgroundColor = "black";
document.body.style.color = "yellow";

console.log("MOLA");

// let title = document.getElementsByTagName("h2");

// console.log(title.title.innerHTML);

let title = document.getElementById("title");
title.innerText = "Degisen Bilgimiz"


console.log(title.innerText);

let link = document.querySelector("ul#list>li>a");

link.innerHTML += "ni degistiriyorum"

console.log(link.innerHTML);

link.style.backgroundColor = "green";
link.classList.add("butoon");

// console.log(Math.sqrt(81));

// function istek(){
//     var kelime = prompt("Please enter a word...", "ikinci kelime")
//     document.write(kelime)
// }

// console.log(istek());
// console.log(typeof istek());

// let isim = prompt("Adinizi giriniz")

// console.log("Merhaba, " + isim);

let one = document.getElementById("walterwhite");   

console.log(one);
console.log(one.innerText);
console.log(one.innerHTML, "merhaba", one.innerText);

let two = document.getElementsByClassName("alternate");

console.log(two);
console.log(two.innerHTML, two.innerText);

for (let i = 0; i < two.length; i++){
    two[i].style.color = "red";
}

let liste = document.querySelector("li");

let urun = document.querySelector("#veri");
let ekle = document.querySelector("#ekle");

ekle.addEventListener("click", function(){
    let li = document.createElement("li");

    li.textContent = veri.value;

    liste.appendChild(li);

    veri.value = "";
}





)