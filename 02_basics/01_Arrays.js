// ARRAY

const myArr = [1, 22, 7, 5, 42]
const  myHeros = ["dhoni", "ronaldo", "roman_reigns"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr);

// Array methods

myArr.push(6)
myArr.push(9) 
myArr.pop() 
myArr.unshift(4)
myArr.shift()

console.log(myArr.includes(7));

const newArr = myArr.join()

console.log(newArr);
console.log(myArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);