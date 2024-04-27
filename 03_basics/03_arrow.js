// const user = {
//     username: "Ritochit",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//     }
// }
// user.welcomeMessage()


// function chai(){
//     let username = "Tanay"
//     console.log(this);
// }
// chai()

const chai = () => {
    let username = "Aritra"
    console.log(this.username);
}
chai()

// arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,5));


//implicit return
// const addTwo = (num1, num2) => num1 + num2

//object return
const addTwo = (num1, num2) => ({username: "Anirban"})
console.log(addTwo(2,5));