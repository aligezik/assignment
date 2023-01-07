//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********")

const car = new Object()
car.brand = "Volvo"
car.model = "1990"
car.color = "agean blue"

console.log(car);
console.log(car.model); //? .notasyonu ile erisim
console.log(car["model"]); //? square bracket ile erisim

function Personel(id, ad, maas){
    this.tc = id
    this.name = ad
    this.salary = maas
}
const p1 = new Personel("1234567890", "John", "40000")
const p2 = new Personel("3338867890", "Clara", "34000")

console.log(p1);
console.log(p2);
console.log(p1, p2);
console.log(this);

// window.alert("Merhaba")
console.log(window.Personel);


const worker = {
    name: "Can",
    surname: "Canan",
    age: 33,
    languages: ["C++", "Go", "Java", "JavaScript"],
    salary: 10000
}

console.log(worker);
console.log(worker.languages);

worker["languages"].forEach((lang) => console.log(lang))

// const upperCaseLangs = worker["languages"].map((lang) => 

console.log(worker["name"]);