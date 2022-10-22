// const mary = { name: "Mary Sue" };
// mary["name"] = "Mary Jane";
// mary["age"]  = 22;
// //console.log(mary) // shows the resulting object with both properties

// const person = {
//   name: "Paul",
//   address: {
//     street: "310 W 95th",
//     city: "New York",
//     zipCode: 10027
//   }
// };
// console.log(person["address"]["city"]); // => "New York"
// person["phoneNumbers"] = ["902-402-2027", "902-402-0551"];
// console.log(typeof person["phoneNumbers"]);
// console.log(person["phoneNumbers"] instanceof Object)
// console.log(person["phoneNumbers"] instanceof Array)
// console.log(person["phoneNumbers"] instanceof String)

// const myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

let pizza = new Pizza();

pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)

// let pizza1 = new Pizza();
// let pizza2 = new Pizza();


// class SomeClass {
//   methodName(parameters) {
//     // this is a method
//   }
// }

// class SomeClass {
//   someMethod() {
//     this.hello = "hi"; // Created a property called hello
//   }
// }

// // This will **NOT** work.
// // That's because addTopping is a method only available to actual instances of Pizza
// // Give it a try!
// Pizza.addTopping(); 

// class Pizza {
//   constructor() {
//     this.toppings = ["cheese"];
//   }
// }


let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];

// const pizza1 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }

// const pizza2 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }

// let pizza = new Pizza('large', 'thin');

// let pizza = {
//   size: 'large',
//   crust: 'thin',
//   toppings: ["cheese"]
// }

// typeof(true); 
// // "boolean" 
// typeof(Boolean(true)); 
// // => "boolean" 
// typeof(new Boolean(true));
// // => "object"


// const greeting = "Hello, world!" 
// const objGreeting = new String("Hello, world!");

// greeting == objGreeting; 
// // => true

// greeting === objGreeting; 
// // => false

// let count = 10
// let result = []
// for (let i = 0; i < count; i++) {
//   result.push(i);
//   console.log(result)
// }




// on any input from stdin (standard input), output a "." to stdout
// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// console.log('after callback');

// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// console.log('after callback');