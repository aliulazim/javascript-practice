// Object Literals
const person = {
    firstName: "ALIUL",
    lastName: "AZIM",
    age: 24,
    email: "aliulazimbd@gmail.com",
    address: {
        city: "Chapai Nawabganj ",
        zipCode: 6300
    },
    getBirthYear: function(){  // Anonimush function
        return 2020 - this.age;
    }
}


let value;
value = person;

// Specific value
value = person.firstName;  // Recommend
value = person['lastName'];
value = person.age;
value = person.address.city;
value = person.address.zipCode;
value = person.getBirthYear();


// Output
console.log(value);


// Array in Object
const people = [
    {name: "Sara", age: 36},
    {name: "Fahim", age: 26},

];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}