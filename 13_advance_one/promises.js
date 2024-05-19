const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promised consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThreee = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "coffee", email: "coffee@example.com"})
    }, 1000)
})

promiseThreee.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Tamojit", password: "723"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Javascript", password: "723"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function comsumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

comsumePromiseFive()


fetch('https://api.github.com/users/TamojitMandal')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))