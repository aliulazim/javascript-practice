
function add() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    
    }
    return result;
}
console.log(add(5, 10, 20, 40, 50));



function add() {
    const newArr = [...arguments]; // convart arguments to array  Using Spread Operator
    return newArr.reduce((acc, curVal) => acc + curVal);
}
console.log(add(5, 10, 20, 40, 50));



// Arrow function not suport arguments object

// const myAdder = () => {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i]
    
//     }
//     return result;
// }
// console.log(myAdder(5, 10, 20, 40, 50));