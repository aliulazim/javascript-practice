// If vs Switch

// let text;
// let roolNomber = 3;

// if (roolNomber === 1){
//     text = "Congratulations! You are first.";
// } else if(roolNomber === 2){
//     text = "Congratulations! But You can do better.";
// } else if(roolNomber === 3){
//     text = "Congratulations! Third is not bad!";
// }

// console.log(text);


// Switch Statement Basic

// let text;
// let roolNomber = 3;

// switch (roolNomber){
//     case 1 :  // Case and (===)  same work. Bouth are check value and data type.
//         text = "Congratulations! You are first.";
//     break;
//     case 2 :
//         text = "You are second!";
//     break;
//     case 3 :
//         text = "You are Third!";
//     break;
//     default :
//     text = "What is your roll?";        

// }

// console.log(text);


// use of break;

let text;
let roolNomber = 1;

switch (roolNomber){
    case 1 :  // Case and (===)  same work. Bouth are check value and data type.
        text = "Congratulations! You are first.";
    
    case 2 :
        text = "You are second!";
    break;   // When condition true and condition stop use break;
    case 3 :
        text = "You are Third!";
  
    default :
    text = "What is your roll?";        

}

console.log(text);




// Grouping cases

let color = "yellow";

switch (color){
    case "red":
    case "Blue":
    case "green":
        console.log("You are selected RGB color");
    break;

    case "cyan":
    case "magenta":
    case "yellow":
    case "black":
        console.log("You are selected CMYK color");
    break;
}