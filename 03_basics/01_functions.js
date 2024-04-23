function sayMyName(){
    console.log("Tamojit");
    console.log("Tanay");
    console.log("Ritochit");
    console.log("Aritra");
    console.log("Anirban");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3,4)
console.log("Result:", result);


function loginUserMessage(username){
    return `${username} just loggged in` 
}
console.log(loginUserMessage("Shubham")); // when no value is given, then undefined will be showing.


function calculateCartPrice(...num1){  // rest operator ...
    return num1
}
console.log(calculateCartPrice(200, 300, 400));


const user = {
    username: "messi",
    price: 699
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

const myArr = [200, 300, 500, 700]

function returnSecondValue(getArray){
    return getArray[3]

}
console.log(returnSecondValue(myArr));