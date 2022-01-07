// const Register = require('./Register')
class Guest {

    name;
    age;
    address;
    email;

    constructor(name, age, address, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.register= [];
    }

    verifyAge() {  //verify age before proceeding to finishing signUp
        if (this.age < 18) {
            console.log(`Sorry ${this.name}, you are too young to use this service.`); //change to boolean
            return this.age;
        }
        else {
            return this.signUp(this.name);
        }
    }

    signUp(name) {
         this.register.push(name);
        //  console.log(`${this.name} has registered successfully. you can now start using the app`)     
    }
    
    // ask for help!!!!!!!!!!!
   viewGuests(){
        console.log(this.register);
    }
}

module.exports = Guest;


const A = new Guest("Bev", 24, "64 zoo lane", "a@hotmail.com");
A.verifyAge()

const b = new Guest("toni",16, "251 southwark", "t@t.com")
const c = new Guest("abi",56, "251 southwark", "t@t.com")
c.verifyAge()

A.viewGuests()
b.verifyAge()
c.viewGuests()


