// Singleton

// object literals
// Object.create

// const mySym = Symbol("Key1")   // symbol

// const JsUser = {
//     name: "Tamojit",
//     age: 18,
//     [mySym]: "myKey1",
//     location: "Kharagpur",
//     email: "tamojitm23@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Friday"]
// }

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "mandaltamojit23@gmail.com"  // overwite 
// Object.freeze(JsUser)         // freeze any object
// JsUser.email = "mandaltamojit23@gchatgpt.com" 


// // const tinderUser = new object()
// const tinderUser ={}
// tinderUser.id = " 123abc"
// tinderUser.name = "Souvik"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "tom7@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "Tamojit",
//             lastname: "Mandal"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}    // ... spread operator
// console.log(obj3);


const course = {
    coursename: "js in hindi",
    price: "699",
    courseInstructor: "Hitseh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
