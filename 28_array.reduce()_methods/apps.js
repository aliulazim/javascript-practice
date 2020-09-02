const numbers = [12, 25, 46, 27, 32, 200];
const votes = ['Yes', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'Absent', 'Absent', 'Na Vote'];

// Reducer function take four (4) arguments accept
/*
    1. Accumulator (acc)
    2. Current Value (cur)
    3. Current Index (idx)
    4. Source Array (src)

*/

// function func(accumulator, currentValue, currentIndex, sourceArray) {
    
// }

const sum = numbers.reduce(function (acc, value) {
    return acc + value;
});
console.log(sum);


const maxNumber = numbers.reduce((acc, val) => {
    if (acc > val) {
        return acc;
    } else{
        return val;
    }
});
console.log(maxNumber);

// const max = numbers.reduce((acc, val) => {
//     return Math.max(acc, val);
// });
// console.log(max);


const max = numbers.reduce((acc, val) => Math.max(acc, val));
const min = numbers.reduce((acc, val) => Math.min(acc, val));
console.log(max);
console.log(min);


const products = [
    {
        name: 'Pen',
        amount: 5,
        price: 10
    },

    {
        name: 'Book',
        amount: 3,
        price: 300
    },

    {
        name: 'Notebook',
        amount: 2,
        price: 50
    }
]



// Total product and Total Price

// const totalPrice = products.reduce(function (acc, item) {
//     return acc + item.amount * item.price;
// }, 0);
// console.log(totalPrice);


const totalPrice = products.reduce(prsum, 0);

function prsum(acc, item) {
    return acc + item.amount * item.price;
}
console.log(totalPrice);




// Automiticly create Object


const result = votes.reduce((acc, vote) => {
    if (acc[vote]) {
        acc[vote]++;
    } else{
        acc[vote] = 1;
    }
    return acc;
}, {})

console.log(result);
