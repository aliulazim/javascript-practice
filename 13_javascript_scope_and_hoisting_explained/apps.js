// Global Variable - Global Scope
let globalVar = "I am global"; // global Scope (Use to accuss to any where)


// Local Variable - Function Scope
// function any() {
//     let localVar = "I am Local";  // Function Scope ( Just Use accuss Function)
//     // console.log(localVar);
//     // console.log(globalVar);
//     if(true){
//         var insideIf = "I am insideIf"; // Block Scope (let use korle)
//         console.log(insideIf);
//     }
//     if(true){
//         // var insideIf = "I am insideIf"
//         console.log(insideIf);
//     }
// }
// any();


//Hoisting
//  function hoisting() {
//      var hoistingTest;
//     console.log(hoistingTest);
//     var hoistingTest = "Hoisting Test";
//     console.log(hoistingTest);
    
//  }
//  hoisting();





// Use of let 

function letTest() {
    let localVare = 30;
    if (true) {
        let insideIf = "Inside if"; // Block Scoped (all time use block scoped function)
        // var insideIf = "Inside if";
        console.log(insideIf);
    }
    if (true) {
        let insideIf = "New Inside if";
        console.log(insideIf);
    }
    if (true) {
        // let insideIf = "New Inside if";
        console.log(insideIf);
    }
}
letTest();




// Use of const
// const PI = 3.1416;
// PI = 2; // Const value do not re-assign
// console.log(PI);

