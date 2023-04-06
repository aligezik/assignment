const button = document.getElementById("submit");
const a = document.getElementById("input1");
const b = document.getElementById("input2");
const result = document.getElementById("result");

function add(a :number, b:number){
    return a + b;
}
button.addEventListener("click", function(){
    console.log("clicked")
    result.innerText = `${add(a.value, b.value)}`;
})