// Create a car object, add a color property to it with the value equals 'black'
// -        Change the color property of the car object to 'green'
// -        Add the power property to the car object, which is a function and displays the engine power to the console

let ferrari = {
  color: "black",
  changecolor() {
    this.color = "red";
  },
  addpower() {
    ferrari.power = "220-860 hp";
  },
};
ferrari.changecolor();
ferrari.addpower();
console.log(ferrari);
//
//
// - Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function count(apple, pear) {
  let total_amount = apple + pear;
  return total_amount;
}
console.log(count(10, 23));
//
//
// -   Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
let sayHello = function (name) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("there is no such name");
  }
};
sayHello("Jonibek");
sayHello();
//
//
// -   Write a function for calculating the type of argument and type output to the console
function findtype(x) {
  return console.log("Type of output is " + typeof x);
}
findtype(5);
findtype(true);
findtype("Salom");
//
//
// -  Write a function that determines whether a number is prime or not
function showprime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

if (showprime(5)) {
  console.log("it is prime");
} else {
  console.log("not prime");
}
