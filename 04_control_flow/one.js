// if

if (true){

}

const isUserLoggedIn = true
if (isUserLoggedIn){

}

if (false){
//   code will not execute if condition is false
}

// < , >, <=, >=, ==, !=, ===, !==

// const temp = 43
// if (temp < 50) {
//     console.log("temperatur is less than 50");
// }
// else{
//     console.log("temperatur is greater than 50");
// }

const balance = 1000
// if (balance > 500) console.log("test");    // implicit function

// else-if

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// } 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loogedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy the course");  
}

if (loggedInFromGoogle || loogedInFromEmail) {
    console.log("User logged in");
}