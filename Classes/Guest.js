const account = require('./Account')
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

        return this.age>18;
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


// const b = new Guest("toni",16, "251 southwark", "t@t.com")
// const c = new Guest("abi",56, "251 southwark", "t@t.com")
// c.verifyAge()

// A.viewGuests()
// b.verifyAge()
// c.viewGuests()


