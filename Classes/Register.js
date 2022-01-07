class Register {
  
    //props
    name;
    age;

    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    verifyAge() {  //verify age before proceeding to finishing signUp
        if (this.age < 18) {
            console.log(`Sorry ${this.name}, you are too young to use this service.`); //change to boolean
        }
        else {

            console.log(`Thanks ${this.name}! Your age has been verified. Please proceed to the signUp`) //change to bollean

        }
    }
}
module.exports = Register;

const A = new Register("Bev", 24);
A.verifyAge();
const B = new Register("Anton", 16);
B.verifyAge();
const C = new Register("kitty", 62)
C.verifyAge();