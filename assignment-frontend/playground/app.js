function isOdd(number) {
  return number % 2 != 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function pickNumbers(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(pickNumbers(numbers, isOdd));
console.log(pickNumbers(numbers, isEven));

const letters = ["A", "B", "C", , "E"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

const letters1 = ["A", "B", "C", , "E"];
letters1.forEach((letters2) => {
  console.log(letters2);
});

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

// const moreThan10 = salaries.filter((s) => s >= 1000)
const moreThan10 = salaries.filter((s) => s >= 10000 && s <= 20000 )
// console.log(moreThan10);

const az10 = salaries
.filter((s) => s < 9000)
.map((k) => Math.trunc(k * 1.1))
.forEach((s) => console.log(s))

// console.log(az10);

console.log(salaries.reduce((s, x) => s * x, 1 ));
console.log(salaries.reduce((s, x) => s + x, 0 )); //toplam zam

const zamTop = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .reduce((s, t) => s + t, 0)
console.log(`toplam yapilan zam`, zamTop);


//! OBJECTS


