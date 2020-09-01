const numbers = [12, 25, 45, 27, 32];
const animals = ['dog', 'cat', 'tiger', 'birds', 'got', 'rats'];

const students =[
    {name: 'Rahim', number: 70, subject: 'Math'},
    {name: 'Karim', number: 85, subject: 'Math'},
    {name: 'Ram', number: 35, subject: 'English'},
    {name: 'Shyam', number: 80, subject: 'Bangla'},
    {name: 'Jodu', number: 75, subject: 'Bangla'},
    {name: 'Modhu', number: 40, subject: 'Bangla'}
];


// const newNumber = numbers.sort(function(a, b) {  // Sort method fully cheang numbers array not create duplicate array 
//     return b - a; 
//     // return a - b;
// });
// console.log(newNumber);

const newNumber = numbers.slice().sort(function(a, b) {  // Now not cheange  
    return b - a; 
    // return a - b;
});
console.log(newNumber);



const bigToSmall = students.slice().sort((a, b) => {
    return a.number - b.number;
}) ;


console.log(bigToSmall);