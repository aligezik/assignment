const colors = [
    "Red",
    "Blue",
    "Yellow"
  ];
  let colors1 = Array(3)
  console.log(colors1);
  console.log(typeof colors1);
  console.log(typeof colors);

const num = [1, 0, 111, 23, 2, 222, 3, 309, 33];
const num1 = {firstName:"John", lastName:"Doe", age:24};
console.log(num[2]);


console.log(typeof num);
console.log(Array.isArray(num));
console.log(num instanceof Array);

let dailyActivities = ['eat', `work`, `sleep`]

const newLength = dailyActivities.push(`exercise`);

console.log(dailyActivities);
console.log(newLength);
console.log(dailyActivities.length);
const newwLength = dailyActivities.pop();
const newwwLength = dailyActivities.shift();
console.log(dailyActivities);

const newKLenght = dailyActivities.unshift('get dresses')

console.log(newKLenght);
console.log(dailyActivities);

const newmLenght = dailyActivities.unshift('first')
console.log(newmLenght);
console.log(dailyActivities);

dailyActivities[1] = `changed`
console.log(dailyActivities);

console.log(num); 
console.log(num1);

const nums = num.concat(num1, "1asd");

console.log(nums);
console.log(nums.reverse());
console.log(dailyActivities.join(", "));


num2 = dailyActivities.reverse();
console.log(nums.reverse());
console.log(nums);

console.log(num.sort());

num.sort( function(a, b){
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
});

console.log(num);

let colors2 = ['red', 'green', 'blue', `2213`];
let deletedColors = colors2.splice(2, 1, 'purple', 'orange');
console.log(colors2); 
console.log(deletedColors);

const colors3= [0, "Green","Red" ,"Yellow", "Green", "Blue", "Pink", "Green", "Blue", "Pink", "Green", "Green"];

console.log(colors3.lastIndexOf("Green")); // 5

console.log(colors3.lastIndexOf("Green",3)); // 2

console.log(colors3.lastIndexOf("green")); // -1