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
A.signUp("toni")
A.signUp("emili")
A.signUp("lili")
// A.signUp(A.name);

const B = new Guest("Tonio", 16, "64 zoo lane", "a@hotmail.com");
A.signUp(B.name)
// A.viewGuests()


