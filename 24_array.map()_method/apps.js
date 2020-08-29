const number = [10, 20, 30, 40];
const names = ['Taminm', 'Sakib', 'Mushfiq', 'Shanto'];
const object = [
    {name: 'Abdullah', availableBooks: 30},
    {name: 'Abubokor', availableBooks: 20},
    {name: 'Omore Faruq', availableBooks: 10},
    {name: 'Osman', availableBooks: 5}
];

// const newNumber = number.map(function(currentValue, index, arr) { // CurrentValue mast be inputed and other 2 optional
//    console.log(arr); 
// });



// call back function
// const newNumber = number.map(function(num) { // CurrentValue mast be inputed and other 2 optional
//     return num * 2;
//  });
//  console.log(newNumber);


// Arrow functions

const newName = names.map(name => {
    return name.toUpperCase();
});
console.log(newName);


const newObject = object.map(item => {
    return item.name;
});
console.log(newObject);