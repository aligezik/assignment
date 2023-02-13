function App() {
  return (
    <div className="App">
      <h1>Hello World  </h1>
      <h3>Hello World!  </h3>
    </div>
  );
}

export default App;

const a = true, b = false;
console.log(!a, b);
console.log(a, b);
console.log(a && 1);
console.log(b && 1);
console.log(b && a);
console.log(b || a);

const age = 15;
let result;
if (age >= 18){
  result = "You are legal."
}else{
  result = "You are not legal."
}
console.log(result);

let result1 = (age >= 18)? `You are legal`: `You are not legal`;

  console.log(result1);

function sayHi(userName){
  console.log(`Hello ${userName}`);
}

sayHi(`Bilge`);

const sayHello = (userName) =>{
  console.log(`Hallo ${userName}`);
}

sayHello(`Bilge Panter`);


let users = [
  { firstName: "Susan",lastName: "Steward", age: 14 },
  { firstName: "Daniel",lastName: "Longbottom", age: 16 },
  { firstName: "Bruno",lastName: "Black", age: 56 },
  { firstName: "Jacob",lastName: "Joyo", age: 15 },
  { firstName: "Sam",lastName: "Drogo", age: 64 },
];

let userFullName = users.map((e) =>{
  let fullName = e.firstName + ` ` + e.lastName;
  return fullName
});

console.log(userFullName);

const youngPerson = users.filter((f) =>{
  return f.age < 18;
});

console.log(youngPerson);

const Joyo = users.find((x) => x.lastName === "Joyo");
console.log(Joyo);