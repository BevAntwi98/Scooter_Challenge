const Guest = require('./Guest');
const scooter = require('./Scooter');
const Scooter = require('./Scooter');
const GooglePay = require('./GooglePay');
const Station = require('./Station');


class User extends Guest {

    unique_id;

    constructor(name, age, address, email, unique_id) {
        super(name, age, address, email)
        this.unique_id = Math.random();
    }


    hireScooter(scooter) { // execute a function that start counting seconds until they return scooter || seaarch js apply
        // pass in scooter 
        scooter = new Scooter(1, "Electric", 100, 32);
        // return scooter.set.isavailable
        return scooter.isAvailable(1);
    }

    returnScooter(station, google) { //pass in take payment  //TOFIX
        
        station=new Station("ChargingStation");// pass in scooter
        google = new GooglePay("BevGoogle", "PhonePay");

        let d = new Date(); // get timestamp for ending session
        d.getDate;
        
        console.log("Session has ended at " + d);
        return station.chargeScooter().then(() => google.verifyBankDetails().then(() => google.takePayment()));
        //return st.chargeScooter().then(() => g.verifyBankDetails().then(() => g.takePayment())); //chaining promises :D not sure how i did this but it works
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
const A = new User("bev", 22, "64 zoo lane", "a@A.com", 111)
 // A.submitFeedback()

A.hireScooter();
// A.returnScooter();

