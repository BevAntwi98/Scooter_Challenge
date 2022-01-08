const Guest = require('./Guest');
const Scooter = require('./Scooter');
const Payment = require('./Payment');
const Bank = require('./Bank');
const Google = require('./GooglePay');
const GooglePay = require('./GooglePay');
const prompt = require('prompt-sync')({sigint: true});



class User extends Guest {

    unique_id;
    register;

    constructor(name, age, address, email, unique_id) {
        super(name, age, address, email)
        this.unique_id = unique_id(Math.random());
        this.register = [];
    }


    hireScooter(Scooter) { // execute a function that start counting seconds until they return scooter || seaarch js apply
        // pass in scooter 
        Scooter;
        // return scooter.set.isavailable
        return s.isAvailable()
        
        // return scooter's availability
    }

    returnScooter(Scooter) { //pass in take payment  //TOFIX
        // pass in scooter
        // get timestamp for ending session

        let d = new Date();
        d.getDate;

        Scooter;
        // returns GooglePay method take paymewnt

        console.log(()=>{p.verifyBankDetails()})
        return g.takePayment();
        

    }

    deleteAccount(name) {
        this.register.pop(name); //removes persons account by name
        console.log(`${this.name} has been removed`);
        return this.register; //returns the current stack

    }

    async submitFeedback() {
        const review = prompt(`Hi There ${this.name}, please leave some feedback so I can better develop my js code ;) `);
        await new Promise(resolve => setTimeout(resolve, 3000));
        return this.review; //not using so much console
       
        // let text= console.log("Review submitted! Thank you");  //console version
        // return text;
    }

}
module.exports = User
const A = new User("bev", 22, "64 zoo lane", "a@A.com", 111)
const e = new User("ww", 22, "64 zoo lane", "a@A.com", 111)
const c = new User("ee", 22, "64 zoo lane", "a@A.com", 111)
const d = new User("rr", 22, "64 zoo lane", "a@A.com", 111)
// A.submitFeedback()

const s = new Scooter(1, "electric", 100, 32);
// A.hireScooter()

const g = new GooglePay("Scooter Hire","GooglePay");
A.returnScooter();
const p = new Payment("payment", "payment")


