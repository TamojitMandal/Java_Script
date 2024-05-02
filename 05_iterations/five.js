const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)

// const newNums =  myNumbers
//                     .map((num) => num * 10)
//                     .map((num) => num + 1)
//                     .filter((num) => num >= 40)

// console.log(newNums);


// Reduce


// const myNums1 = [1, 2, 3]
// const myTotal = myNums1.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and curravl: ${currval}`);
//     return acc + currval
// }, 0)


const myNums1 = [1, 2, 3]
const myTotal = myNums1.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "japp dev course",
        price: 5999
    },
    {
        itemName: "datvscience course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);