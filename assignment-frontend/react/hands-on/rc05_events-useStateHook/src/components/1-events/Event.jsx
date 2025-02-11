// // * =======================================================
// // *                     EVENTS
// // * =======================================================

// //? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
// //? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
// //? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
// //? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
// //? React ortaminda kullanilan event'larin bilindik tarayicilarda
// //? sorunsuz calismasini saglanir.

// //? Ayrinti icin : https://reactjs.org/docs/events.html

// const Event = () => {
//   //? Statik degisken
//   let text = "Hi FS13"

//   const handleClick = () => {
//     alert("Hi Events")
//   }

//   const handleReset = (msg) => {
//     console.log(msg)
//   }

//   function degistir() {
//     text = "Hello React"
//     console.log(text)
//   }

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={handleClick}>Click</button>
//       <button onClick={() => handleReset("Please clear the text")}>
//         Reset
//       </button>

//       {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
//       bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
//       takdirde event fonksiyonu event gerceklesmeden cagirilir */}

//       <button onClick={degistir}>Change</button>
//     </div>
//   )
// }

// export default Event

// //! text console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
// //* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
// //* static olarak kabul etmesinden kaynaklanir.

// //* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
// //* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
// //! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
// //! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
// //? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
// //? 1. Statefull Classes (Class Components).
// //? 2. Hooks (Functional Components).

// //?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
// //? Yaygin kullanim Fonksiyonel Component'lerdir.



const Event = () => {

  let text = "Hi Bilge Panter"

const handleClick = () => {
  alert("Hi event!");
}
const handleReset = (msg) => {
  console.log(msg);
}
function degistir () {
  text = "Hello React"

  console.log(text);
}

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={()=> handleReset("Please Clear Text")}>Reset</button>
      <button onClick={degistir}> Change</button>
    </div>
  )
}

export default Event