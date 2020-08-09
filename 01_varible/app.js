// ES2015 or ES6
// var, let, const

//VAR--/function scoped
var name = "aliul azim";
console.log(name);

//LET -- / global scoped
let age = 45;
console.log(age);

// User input value
// Example 
// let input = prompt("What is your name?");
// alert("Hello " , input);

//init
// let address;
// address = "Chapai Nawbabgong"
// console.log(address);

// Variable Name Cass
let userName; // Camel case ---- Recommend
let first_name; // Under score ( Use to PHP Wordpress popular)
let LastName; //Pascal case (Use to Object, Constroctor function, ES6 Class) 

// Javascript Case Sencetive
// let Name,
// let name,

// Const

const city = ["Dhaka", "|Rajshahi", "Barishal", 15, 47]; // Const do not except undefine value
// city = "Rajhahi"; // Const can't reassient new value 

city.push(true); //But Const value modify passable
city.pop();
console.log(city);