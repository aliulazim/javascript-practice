let example;
// Number to String
example = String(555);
example = String(5 + 5);
example = 555;


// Date to String
example = String(new Date());

// Boolean to String
example = String(true);

// Array to String
example = String([1,32,55,8]);

// Another way with toString() method.
example = (555).toString();

// String to Number
example = Number("555");

//Boolean to Number
example = Number(true);  // Show result 1
example = Number(false); // Show result 0

// Text to Number
example = Number("Hello"); // Show result NaN(Not a Number) JS spacil value


// Another ways String to Number
example = parseInt("555.555455");
example = parseFloat("555.555455");


val1 = "5";
val2 = 6;
example = Number(val1 + val2);


//Output
console.log(example);
console.log(typeof example);
// console.log(example.length); // Length just working String
console.log(example.toFixed(2)); // toFixed just working number
