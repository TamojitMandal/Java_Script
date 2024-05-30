const user = {
    username: "Tamojit",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);    // this shows empty 


// constructor function


function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User("Tamojit", 9, true)
const userTwo = new User("TOM", 6, false)
console.log(userOne.constructor);
// console.log(userTwo);


// new keyword
// 1) empty object was created which is called as instances
// 2) constructor function was call due to new keyword
// 3) all arguments were inject in this keyword
