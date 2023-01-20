// const a = document.querySelector(".list");

// const b = a.nextElementSibling(".list")

// document.querySelector(".list").nextElementSibling(".list");

const newUl = document.querySelector("ul");

// console.log(newUl);

const newLi = document.createElement("li");
newLi.setAttribute("id", "Steve"); //id atama
newLi.setAttribute("class", "mentor"); //class atama

const text = document.createTextNode("bilgepanter.com"); //icerik

newLi.appendChild(text); //sona atiyor
// newLi.prependChild(text); //basa atiyor

newUl.appendChild(newLi);

// newUl.prepend(newLi); //basa atiyor

console.log(newLi);
