let myName = "Tamojit    "

console.log(myName.trueLength);

let myHeros =["thor", "spiderman"]

let heroPower = {
    thor: "hammer", 
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Array.prototype.heyTamojit = function(){
    console.log(`Tamojit says hello`);
}


// inheritance

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignmet',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//  modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)