// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encrypytPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com", "723")

// console.log(chai.encrypytPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encrypytPassword = function(){
    return `${this.password}abc`  
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`  
}

const tea = new User("tea", "tea@gmail.com", "973")

console.log(tea.encrypytPassword());
console.log(tea.changeUsername());
