// Function Declaration

// function adder(a, b) { // Parameter
//     console.log(a + b);
// }
// adder(10, 25); // Argoment


// Local Variables 

// function greet() {
//     let userName = "Abdullah"; // Local Variables
//     console.log("Hello " + userName);
    
// }
// greet();

// global Variables

// let userName = "Abdullah"; // global Variables

// function greet() {
        
//         console.log("Hello " + userName);
        
//     }
//     greet();

//     console.log(userName);



// Parameters and it's evloution

// ES5 Code Style
// function test(a, b) {
//     if (typeof a === "undefined"){
//         a = "AR Rahaman"
//     } if (typeof b === "undefined"){
//         b = " AR Rahim"
//     }

//     console.log("Hello " + a + b);
    
// }
// test();
// test("AR Rahaman" , " AR Rahim");



// ES6 Code Style
// function test(a = "Abdullah ", b = "Rahim") {
    
//     console.log("Hello " + a + b);
    
// }
// test();


// Returning a value
function calcSquare(x) {
    return (x*x);
}
let value = calcSquare(9);
console.log(value);


// Naming Function f(get, set, calc, create, check)

// getvalue // Kono kichu jakhon ami paite chai takhon (get) use karbo
// getvalue // Kono kichu jakhon ami paite chai takhon (get) use karbo
// calcSquare // Kono kichu jakhon ami Calculation korte chai takhon (calc) use karbo
// createValue // Kono kichu jakhon ami create korte chai takhon (create) use karbo
// checkValue // Kono kichu jakhon ami check korte chai takhon (check) use karbo



// Immidiatley Invokable Function Expressions - IIFEs

(function (name) {
    console.log(name)
}) ("AZIM");