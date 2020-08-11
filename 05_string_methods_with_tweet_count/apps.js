// let str1 = "First course of this channel is course about JavaScript";
// let str2 = "and we will learn more things too.";

// // charAt ()
// console.log(str1.charAt(0));


// // charCodeAt()
// console.log(str1.charCodeAt(2));

// // concat()
// console.log(str1.concat(str2));

// // endsWith()
// console.log(str1.endsWith("JavaScript")); //Case Sencetive

// // fromCharCode()
// console.log(String.fromCharCode(114));

// // includes()
// console.log(str1.includes("of")); //Case Sencetive

// // indexOf()
// console.log(str1.indexOf("course"));

// // lastIndexOf()
// console.log(str1.lastIndexOf("course"));

// // match()
// console.log(str1.match(/course/g)); //Result show array

// // repeat()
// console.log(str2.repeat(4));

// //replace()
// console.log(str1.replace(/course/g, "lessons"));

// // search()
// console.log(str1.search("course"));

// // slice()
// console.log(str1.slice(1, 5));

// // split()
// console.log(str2.split(" ")); // make a array 

// // toUpperCase()
// console.log(str1.toUpperCase());

// // toLowerCase()
// console.log(str2.toLowerCase());


// Tweet Count Project

let tweet = prompt("Compose your tweet");

// slice
let slicedTweet = tweet.slice(0, 140);

// aleart
alert(slicedTweet + "\nYour original tweet size was:" + tweet.length);

console.log(slicedTweet.length);