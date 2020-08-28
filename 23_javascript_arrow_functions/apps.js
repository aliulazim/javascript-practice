// Arrow Functions

// const square = function(x){ // function expretion
//     return x * x;
// };
// console.log(square(5));

// const borgo = (x) => {  // Arrow function
//     return x * x ; 
// };
// console.log(borgo(7));

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(4,5));

// const isEven = x => {
//     return (x % 2 === 0);
// };
// console.log(isEven(45));











// Impicit Returns

const square = x => ( // Only single value khatre 2nd braket er jaigai 1st braket use kore return use kara lagbe na
    x * x
)
console.log(square(8));


const borgo = x =>  x * x; // Only single value khatre 2nd braket and 1st braket chara one line code likhe return use kara lagbe na

console.log(borgo(9));


const isEven = x => x % 2 === 0;
console.log(isEven(4));

const add = (a, b) => a + b;
console.log(add(4, 8));