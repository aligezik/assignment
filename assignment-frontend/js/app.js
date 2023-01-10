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
