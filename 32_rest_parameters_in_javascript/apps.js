// Rest Parameter 

function person(name, age, ...degree) {
    console.log(name);
    console.log(age);
    for(let i in degree) {
        console.log(degree [i]);  // [i] Remove then show Ruselt Degree Array Style
    }
    
}
person('jone', 25, 'SSC', 'HSC');


// function person(name, age, ...degree) {
//     console.log(name);
//     console.log(age);
//     for(let i in degree) {
//         console.log(typeof degree); // This is a Array  But show Object
//     }
    
// }
// person('jone', 25, 'SSC', 'HSC');



// Rest parameter ar last R Kono parameter use kara jai na

// function person(name, age, ...sum) {
//     console.log(name);
//     console.log(age);
//     for(let i in sum) {
//         console.log(sum);
//     }
    
// }
// person('jone', 25, 25, 30);

// function person(name, age, ...sum) {
//     console.log(name);
//     console.log(age);
    
//     let result = sum.reduce((acc, curVal) => {
//         return (acc += curVal);
//     });
//     console.log(result);
// }
// person('jone', 25, 25, 30);

