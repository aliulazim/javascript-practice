// // First letter capital letter to small and small to capital letter

// let userName = prompt("What is your name?");
// let userNameUpperCase = userName.toUpperCase();
// let userNameLowerCase = userName.toLowerCase();


// let firstLetter = userNameUpperCase.slice(0,1);
// let totalLegnth = userName.length;

// alert("Hello " + firstLetter + userNameLowerCase.slice(1, totalLegnth));


// Template literals

 // console.log("My first template literals\nMy second template literals"); // Line break
// console.log(`My first template literals My second template literals`); // Line break

const name = "Tanisa";
const age = 7;
const job = "Student";
const city = "Chapai Nawbabgong";
let html;

function hello() {
    return "Hello";
}

// without template string (es5)
// html = "<ul>" + 
//             "<li> Name: " + name + "</li>" + 
//             "<li> Age: " + age + "</li>" + 
//             "<li> Job: " + job + "</li>" + 
//             "<li> City: " + city + "</li>" + 
//         "</ul>"

// document.body.innerHTML = html;        


//With template string (ES6)

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Likes: ${10+100}k </li>
        <li>Function: ${hello()}</li>
    </ul>

`
document.body.innerHTML = html; 