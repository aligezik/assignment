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
