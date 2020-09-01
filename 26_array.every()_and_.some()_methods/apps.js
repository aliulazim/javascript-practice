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

let everyTextHeading = "Start Every Here";
let someTextHeading = "Start Some Here";


// .every() Method
console.log(everyTextHeading);

const lessThen20 = numbers.every(function (num) {  // Total value use every()
    return num < 20;
});
console.log(lessThen20);


const newAnimals = animals.every((animal) => {
    return animal.length === 5;
});
console.log(newAnimals);


const hasFaided = students.every((exam) => {
    return exam.number > 33;
});

console.log(hasFaided);




// .some() Method

console.log(someTextHeading);

const someLessThen20 = numbers.some(function (num) {  // Single value use some()
    return num < 20;
});
console.log(someLessThen20);



const someAnimals = animals.some((animal) => {
    return animal.length === 5;
});
console.log(someAnimals);


const somehasFaided = students.some((exam) => {
    return exam.number < 33;
});

console.log(somehasFaided);