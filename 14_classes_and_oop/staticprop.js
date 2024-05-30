class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `723`
    }
}

const tamojit = new User("Tamojit")
console.log(tamojit.createId()); 

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")
console.log(iphone.logMe);