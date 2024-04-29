const userEmail = "tamojit@23gmail.com"

if (userEmail) {
    console.log("Got User email");
} else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy values

// "0",'false', " ", [], {}, function(){}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10


console.log(val1);