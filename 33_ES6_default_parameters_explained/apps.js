// Default parameter assign Old style

function person(firstName, lastName) {

    firstName = firstName || "Enter Your First Name";
    lastName = lastName || "Enter Your Last Name";
    console.log(firstName);
    console.log(lastName);
}
person();


// Default parameter assign New style ES6

// function person(firstName = "Aliul", lastName = "Azim") {
//     console.log(firstName);
//     console.log(lastName);
// }
// person(10, 0);