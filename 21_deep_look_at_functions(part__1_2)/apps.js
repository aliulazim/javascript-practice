// Function Expressions
// Higher Order Functions
// Function as Arguments

function jog(x, y){
    return x + y;
}

const biyog = function(x, y){
    return x - y;
}

const gun = function multiply(x, y){
    return x * y;
}


const clac = [jog, biyog, gun];
console.log(clac);
console.log(clac[0]);
console.log(clac[0](5, 10));
 
for (let f of clac){   // Now f mening function
    let result = f(30, 5);
    console.log("Show This Result: " + result);
}

const clacObject = {
    add: jog,
    subtract: biyog,
    multiply: gun
}
 console.log("Show This Object Result: " + clacObject.add(5, 10 ), + clacObject.subtract(10, 5 ), + clacObject.multiply(5, 5));




// Accept Other function as argument
function repeat(func) {
    func();
    func();
    func();
    func();
}

const hi = function () {
    console.log("Hi, you are Welcome");
};

function bye() {
    console.log("Bye, you can go");
}

repeat(hi); // Ruselt show 4 time becouse I input argument hi Repeat functinn and repeat function argument call 4 time.


// Input Number and how much print
function repearWithNum(func, num) {
    for (let i = 0; i < num; i++){
        func();
    }
}

repearWithNum(bye, 20);


// input 2 argument and pic random 1 argument
function randomPick(funcOne, funcTwo) {
    let randomNum = Math.random();
    console.log(randomNum);

    if (randomNum > 0.5){
        funcOne();
    } else{
        funcTwo();
    }
    
}

randomPick(hi, bye);
randomPick(hi, bye);
randomPick(hi, bye);

// Return a function 