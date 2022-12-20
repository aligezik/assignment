//! ODEV1:  Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.

//? let sayiMiktari = Number(prompt("enter a number"));
// let sum = 0;

// for( i = 0; i < sayiMiktari; i++ ) {
//     let girilenSayi = Number(prompt("sayi giriniz"))
//     sum += girilenSayi;
// }
// console.log(`Girilen sayi ortalamasi: ${((sum/sayiMiktari).toFixed(2))}`);

//! ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore
//! uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

let taban = Number(prompt("taban sayisi giriniz"));
let us = Number(prompt("us sayisi giriniz"));

let sonuc = 1;

for(i = 0; i < us; i++){
        sonuc=sonuc*taban
}
console.log(sonuc);