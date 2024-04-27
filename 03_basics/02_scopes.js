let a =200                 // global scope

if (true){                 // block scope 
    let a = 40
    const b = 50
    // console.log("Inner:", a);
}

// console.log(a);


function one() {
    const username = "Tamojit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "Tamojit"
    if (username == "Tamojit"){
        const website  = " youtube"
        console.log(username + website)
    }
}