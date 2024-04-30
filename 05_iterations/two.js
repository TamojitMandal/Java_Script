// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// Maps

const map = new Map()
map.set('Ind', "India")
map.set('USA', "United states of America")
map.set('Fra', "France")

// console.log(map);

for (const key of map){
    console.log(key);
}

for (const [key, value] of map){
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'IGI'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);            // this methode doesnt work in object
// } 