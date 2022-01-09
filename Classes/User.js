const Guest = require('./Guest');
const Scooter = require('./Scooter');
const Payment = require('./Payment');
const Bank = require('./Bank');
const Google = require('./GooglePay');
const GooglePay = require('./GooglePay');
const Station = require('./Station');
const prompt = require('prompt-sync')({ sigint: true });



class User extends Guest {

    unique_id;
    register;

    constructor(name, age, address, email, unique_id) {
        super(name, age, address, email)
        this.unique_id = Math.random();
        this.register = [];
    }


    hireScooter(Scooter) { // execute a function that start counting seconds until they return scooter || seaarch js apply
        // pass in scooter 
        Scooter;
        // return scooter.set.isavailable
        return s.isAvailable();

       
    }

    returnScooter(Scooter) { //pass in take payment  //TOFIX
        // pass in scooter
        // get timestamp for ending session

        let d = new Date();
        d.getDate;

        Scooter;
        // returns GooglePay method take paymewnt

        console.log("Session has ended at " + d);
        return st.chargeScooter().then(() => g.verifyBankDetails().then(() => g.takePayment())); //chaining promises :D not sure how i did this but it works
    }

    deleteAccount(name) {
        this.register.pop(name); //removes persons account by name
        console.log(`${this.name} has been removed`);
        return this.register; //returns the current stack
    }


    async submitFeedback() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return "Review submitted"; // wanted to implement prompt but had problems testing it

        // prompt way
        // const review = prompt(`Hi There ${this.name}, please leave some feedback so I can better develop my js code ;) `);
        //   await new Promise(resolve => setTimeout(resolve, 3000));
        //    return "Review submitted";
    }

}
module.exports = User


// TESTING MY CODE
// const A = new User("bev", 22, "64 zoo lane", "a@A.com", 111)
// const e = new User("ww", 22, "64 zoo lane", "a@A.com", 111)
// const c = new User("ee", 22, "64 zoo lane", "a@A.com", 111)
// const d = new User("rr", 22, "64 zoo lane", "a@A.com", 111)
// // A.submitFeedback()

// const s = new Scooter(1, "electric", 100, 32); //if a scooter object is created with less than 100% then isAvailable() method will console.log error
// // A.hireScooter()

// const g = new GooglePay("Scooter Hire", "GooglePay");

// const p = new Payment("payment", "payment");

// const st = new Station("station1");
// A.returnScooter();

