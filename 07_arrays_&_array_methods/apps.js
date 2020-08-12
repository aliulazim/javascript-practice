// Array Ducliar two way

let numbers = [12, 14, 57, 100, 77, 30];
let numbers2 = new Array(12, 14, 57, 77, 30);
const color = ["red", "yellow", "green", "orange"];
const mixed = [24, "hello", true, undefined, null, {a: 1, b: 2}, new Date()];

let value;
value = numbers.length;  // array length check
value = Array.isArray(numbers);  // Array true flase check
value = numbers[0]; // Array index check (array index start 0 )

// Array Value reflesh (value just modifie but when i check value index check then result show prevuse value)
// numbers[0] = 100;

// Value index check
value = numbers.indexOf(77);

//MUTATING ARRAY
//  numbers.push(120); // Value add last index
//  numbers.unshift(320); // Value add first index

//  value = numbers.length;  // array length check

// numbers.pop(); // Value remove last index
// numbers.shift(); // Value remove first index
// numbers.slice(1, 1) // Specified Value remove

// numbers.reverse(); // all value reverse left to right 
// value = numbers.concat(numbers2, color, mixed); // Two array add (+)

// value = color.sort(); // Value size alfabate (a-z) 

// value = numbers.sort(); // Value size first number akare (10-2) 

// value = numbers.sort(function(x, y){
//     return x -y;
// }); // Value size small number to big number (2-10) 

// value = numbers.sort(function(x, y){
//     return y -x;
// }); // Value size big number to small number (20-10) 
 
// find()
function over10(num){
    return num > 50;
}
value = numbers.find(over10)



// Output
console.log(numbers);
console.log(value);