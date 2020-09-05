// What is JavaScript Loop?

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Lesthan (<)
// Gaterthan (>)

// for (let i = 0; i <= 100; i++) {  // Result show 0-99 But if i need 100 just i write (=) then show result 0-100.
//     console.log(i);
// }


// for Loop
// (i++), (i = i + 1), (i += 1)

//Increment
// for (let i = 0; i <= 10; i++){ 
//     console.log(i);
// }

// // Decrement
// for (let i = 9; i >= 0; i--){
//     console.log(i);
// }


// // Break  and Continue
// for (let i = 9; i >= 0; i--){
//     // if (i === 5) break;
//     if (i === 5) continue;
//     console.log(i);
// }


// let myArray = ["one", "two", "three", "four", "five", "six"];

// // // One to < six
// for (let i = 0, lnt = myArray.length; i < lnt ; i++){
//     console.log(myArray[i]);
// }

// six to > one
// for (let i = myArray.length -1; i >= 0 ; i--){
//     console.log(myArray[i]);
// }
// console.log(myArray[6]);


// while Loop

// Increment
// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// Decrement
// let i = 10;
// while (i >= 0){
//     console.log(i);
//     i--;
// }

// Break  and Continue
// let i = 10;
// while (i >= 0){
//     // if(i === 5) break;
//     // if (i === 5) continue; // Continue working infinity
//     console.log(i);
//     i--;
// }

// Increment
// let myArray = ["one", "two", "three", "four", "five", "six"];
// let i = 0;

// while (i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }


//Decrement

// let i = myArray.length -1;

// while (i > 0 ){
//     console.log(myArray[i]);
//     i--;
// }

// for vs while

// Input a learger number input samll number then again alart 
// let myPrompt = Number(prompt("Enter a Number: "));
// // console.log(typeof myPrompt);

// while (myPrompt < 10) {
//     alert("Enter a Larger number!");
//     myPrompt = Number(prompt("Enter a Number: "));

// } if (myPrompt >= 10){
//     alert("Congratulations!");
// }

// do..while Loop
//  let i = 100;
//  do{
//      console.log(i);
//      i++;
//  } while(i < 10);





// forEach Loop (Element, Index, Array )
// let myArray = ["one", "two", "three", "four", "five", "six"];

// myArray.forEach(function(elem, i ){
//   console.log(`Index: ${i}, Element: ${elem}`); //Template literals
//     // console.log(elem);
//     // console.log(i);
// })

// es6 array function
// myArray.forEach((elem) => {
//     console.log(elem);
// })

// One liene code
// myArray.forEach(elem => console.log(elem));




// for..of Loop
// let myArray = ["one", "two", "three", "four", "five", "six"];

// for ([i, element] of myArray.entries()){
//     // if (i === 2) break;
//     // if (i === 2) continue;
//     console.log(`Index: ${i}, Element: ${element}`); //Template literals
//     // console.log(elem);
//     // console.log(i);
// }






// for..in Loop

myObje = {
    name: "Abdullah",
    age: 25,
    city: "Dhaka"
}

for (prprty in myObje){
    console.log(`Property: ${prprty}, Value: ${myObje[prprty]}`); //Template literals
    // console.log(prprty);
}

// Execution Time

let num = 100000000;
let timeArray = new Array(num);

//for
console.time("for")
for(let i = 0; i < num; i++){}
console.timeEnd("for")

//while
console.time("while") 
let i = 0;
while(i < num){i++}
console.timeEnd("while")

//forEach
console.time("forEach")
timeArray.forEach(elem2 => "")
console.timeEnd("forEach")

//for..of
console.time("for..of")
for(elem3 of timeArray){}
console.timeEnd("for..of")



// Write a loop to find sum of all odd numbers from 1 to n using for loop. Use some Logic to find sum of odd numbers


let num1 = 50;
let odsum = 0;
for(let i = 1; i <= num1; i++) {
  if(i % 2 !== 0) {
    console.log(i);
    odsum = odsum + i;
  }
}

console.log("Total of Odd Number : " + odsum);



// Write a loop to find sum of all even numbers from 1 to n using for loop. Use some Logic to find sum of even numbers


let num2 = 75;
let sum = 0;
for(let i = 1; i <= num2; i++) {
  if(i % 2 === 0) {
    console.log(i);
    sum = sum + i;
  }
}

console.log("Total of Even Number : " + sum);


/*
  Use While Loop
*/

let num3 = 75;
let evbSum = 0;
let x = 1;

while (x <= num3){

    if( x % 2 === 0){
        console.log(x);
        evbSum = evbSum + x;
    }
    
    x++;
    
}
console.log("Total of Even Number : " + evbSum);
