// const Register = require('./Register')
class Guest {

    name;
    age;
    address;
    email;
    // static register[]

    constructor(name, age, address, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.register = [];
    }

    verifyAge() {  //verify age before proceeding to finishing signUp
        if (this.age < 18) {
            return false; // console.log(`Sorry ${this.name}, you are too young to use this service.`); //change to boolean
        }
        else {
            return true; 
        }
    }

    signUp() { //dont pass anything
        this.register.push();
        // this.isRegistered=true;
        // Guest.register.push(this);
        //  console.log(`${this.name} has registered successfully. you can now start using the app`)     
    }
}

module.exports = Guest;

// // TESTING MY CODE
// const A = new Guest("Bev", 24, "64 zoo lane", "a@hotmail.com");
// A.verifyAge()

// const b = new Guest("toni",16, "251 southwark", "t@t.com")
// const c = new Guest("abi",56, "251 southwark", "t@t.com")
// c.verifyAge()

// A.viewGuests()
// b.verifyAge()
// c.viewGuests()


