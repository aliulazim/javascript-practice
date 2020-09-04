// Spread Operator in Function Call

let num = [10, 20, 30, 40, 50];
// console.log(...num);  // Show induvijual array value


function add(a, b, c, d, e) {
    return a + b + c + d + e;
};
console.log(add(...num));
console.log(Math.min(...num));  // Use spread operator
console.log(Math.min.apply(null, num));  // Not Use spread operator



// Spread Operator in Array Literals

let name = ["Shakib", "Tamin", "Mushfiq"];
let role = ["All-rounder", "Batsman", "Keeper"];


// Create one Array
let team = [...name, ...role, "Mashrafi", "Bowler"];

console.log(team);
console.log(name);
console.log(role);

// One String later cteate indivijule later 

let str = "Hello";
let newStr = [...str];
console.log(newStr);




// Spread Operator in Object Literals

let product = {
    name: "Laptop",
    price: 50000,
};

let place = {
    shopeName: "Random Laptop Shop",
    address: "Dhaka, Bangladesh",
};

let store = {...product, ...place};
console.log(store);