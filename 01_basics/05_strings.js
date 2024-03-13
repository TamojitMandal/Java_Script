const name = "Tamojit"
const repoCount = 13

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('John')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-4,2)
console.log(anotherString);

const url = "hhtps://tamojit.com/tamojit%20mandal"
console.log(url.replace('%20', '-'));