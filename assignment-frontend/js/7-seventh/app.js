const input = document.querySelector('.myInput')
const btn = document.querySelector('.myButton')
const ul = document.querySelector('.myUl')
const btnclr = document.querySelector('.myButtonClr')


btn.addEventListener('click', () => {
  if ((input.value).length == 0) {
    alert('Please add some tasks :)')
  } else {
    const newLi = document.createElement('li')
    newLi.classList.add('list')
    ul.appendChild(newLi)
    newLi.innerText = input.value
    input.value = ''

    newLi.addEventListener('click', () => {
      newLi.style.textDecoration = 'line-through'
      // newLi.classList.add('checked')
    })
    newLi.addEventListener('dblclick', () => {
      ul.removeChild(newLi)
    })
    btnclr.addEventListener('click', () => {
      newLi.remove()
    })
  }
})

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    btn.click();
  }
})

window.onload = function () {
  input.focus();
};



// document.querySelector(".myButton").onkeyup = function (e) {
//   if (e.code == "Enter") {
//     //butonu çalıştır
//     document.querySelector(".myButton").onclick()
//   }
// }



// btn.onclick=function(){
//   sonuc.innerHTML+=mesaj.value+"<br>"
//   mesaj.value=""
// }

// mesaj.onkeyup=function(e){
//   if(e.code=="Enter")
//   {
//      //butonu çalıştır
//      document.querySelector("#btn").onclick()

//   }
// }

// newLi.addEventListener('dblclick', )