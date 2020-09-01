const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersDuplicate = [1, 2, 2, 3, 3, 4, 5, 7, 1, 9, 4, 5, 6, 7, 8, 9];

const students =[
    {name: 'Rahim', number: 70, subject: 'Math'},
    {name: 'Karim', number: 85, subject: 'Math'},
    {name: 'Ram', number: 33, subject: 'English'},
    {name: 'Shyam', number: 80, subject: 'Bangla'},
    {name: 'Jodu', number: 75, subject: 'Bangla'},
    {name: 'Modhu', number: 20, subject: 'Bangla'}
];

let findTextHeading = "Start Find Here";
let filterTextHeading = "Start Filter Here";


// Find

console.log(findTextHeading);

const greaterThanThree = numbers.find(function(num){
    return num > 3;
});
console.log(greaterThanThree);


const failedStudent = students.find((exam) => {
    return exam.number < 33;
});
console.log(failedStudent.name , failedStudent.number , failedStudent.subject);



// Filter
console.log(filterTextHeading);


const newNum = numbers.filter((num) => {
    return num > 3;
});
console.log(newNum);


const numberUpper70 = students.filter((exam) => {
    return exam.number >= 70 && exam.subject === 'Bangla';
});

console.log(numberUpper70);



const noDuplicate = numbersDuplicate.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(noDuplicate);