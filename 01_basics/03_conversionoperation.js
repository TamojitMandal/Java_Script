let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);


// "33" ==> 33
// "33abc" ==> Nan
// true ==> 1; false ==> 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" ==> false
// "Tamojit" ==> true

let someNumber = 7
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************** OPERATIONS *************

let value = 7
let negValue = -value
console.log(negValue);

let str1 = "AR"
let str2 = "TT"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 +2);
console.log(1 + 2 + "2"); 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);