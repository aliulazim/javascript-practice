// ASSIGNMENT OPERATOR VS COMPARISON OPERATOR

// let number = 20; // Assignment operator (=)
// if number == 20; // Comparison operator (== / ===)





// BASIC IF STATEMENT

// if (number == 200){
//     console.log("Yess!!!")
// }else{
//     console.log("NO!!!!!")
// }


// COMPARISON OPERRATORS: >, <, >=, <=, ===, and !==

// let number = 0;
// if (number > 0){
//     console.log("The Number is Positive!!!")
// } else if (number < 0){
//     console.log("The Number is Negative!!!!")
// }else{
//     console.log("The Number is a Zero!!!")
// }


// let number =17;
// if (number >= 18){
//     console.log("Yor are a voter!!!")
// } else{
//     console.log("You are not a voter! Basay jow!!!")
// }


let number =18;
if (number != 18){
    console.log("Yor are a voter!!!");
} else{
    console.log("You are not a voter! Basay jow!!!");
}

// !true = false;
// !false = true;



// DEFFERENCE BETWEEN == AND ===

// let num = "32";  // (==) Just check value and result show (Yes! It's 32)
// if (num == 32){
//     console.log("Yes! It's 32")
//     console.log(typeof num);
// }


// let num = "32";  // (===) Check value and Data Type then  result show (No! It's Not  32)
// if (num === 32){
//     console.log("Yes! It's 32")
//     console.log(typeof num);
// }else{
//     console.log("No! It's Not 32")
//     console.log(typeof num);
// }


// LOGICAL OPERATORS: &&, ||, and !

// let name = "ABDULLAH";
// let age = 25;
// let haveDegree = true;
// let experience = 5;

// // condition: Degree and 2+ years experinence ( && use 2ta condition true haya lagbe)

// if (haveDegree == true && experience >= 2) {
//     console.log(name + ", You are capable to work here!");
// }else{
//     console.log("Sorry! Try again later");
// }


let name = "ABDULLAH";
let age = 25;
let haveDegree = false;
let experience = 5;

// condition: Degree or 18+ years age ( || use je kono 1ta  condition true holai habe)
if (haveDegree == true || age >= 18) {
    console.log(name + ", You are capable to work here!");
}else{
    console.log("Sorry! Try again later");
}

/*

=============== AND && =======================
true + true = true
true + false = false
false + true = false
false + false = false

=============== OR || =======================
true + true = true
true + false = true
false + true = true
false + false = false

=============== NOT ! =======================

!true = false
!false = true


*/