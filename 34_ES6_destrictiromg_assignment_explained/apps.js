// Array Destructur

const topPlayer = ['V. Kohli', 'R.G. Sharma', 'Babar Azam', 'L.R.P.L. Raylor', 'F. du Plessis'];

// Old System

// const first = topPlayer[0];
// const second = topPlayer[1];
// console.log(first);


// New System (ES6)

// const [first, second, , , fifth] =  topPlayer;  // jakhon index dharabahik vabe na cal kore index gap cal korbo tokhon just (,) 
// console.log(fifth);


// rest parameter use
const [first, second, ...other] =  topPlayer; 
console.log(other);



// Object Destructur

const topPlayer1 = {
    name: 'V. Kohli',
    rank: 1,
    country: 'India',
    rating: 869,
    team: {
        national: 'IND',
       // ipl: 'RCB',
    },
};

// const {name: newName, rank} = topPlayer1;
// console.log(rank);

// const {team: {ipl}} = topPlayer1;
// console.log(ipl);

// const {team} = topPlayer1;
// const {national: jatio} = team;
// console.log(jatio);


// Use Default parameter

const {team} = topPlayer1;
const {ipl = "Your selected team here"} = team;
console.log(ipl);



// Function

// old 
// function printDetails(player) {
//     console.log(`${player.name} ${player.rank} ${player.country}`);
// }
// printDetails(topPlayer1);

// New (ES6)

function printDetails({name, rank, country}) {
    console.log(`${name} ${rank} ${country}`);
}
printDetails(topPlayer1);