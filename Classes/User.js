const Guest = require('./Guest');
// const Payment = require('./Payment');
const prompt = require('prompt-sync')();

class User extends Guest {

    unique_id;
    register;

    constructor(name, age, address, email, unique_id) {
        super(name, age, address, email)
        this.unique_id = Math.random();
        this.register=[];
    }

    hireScooter(){ // execute a function that start counting seconds until they return scooter || seaarch js apply

    }

    returnScooter(){ //take payment

    }
    deleteAccount(name){
        this.register.pop(name);
        console.log(`${this.name} has been removed`);

    }
    
    async submitFeedback(){
        const review = prompt(`Hi There ${this.name}, please leave some feedback so i can better develop my js code ;)`);
        await new Promise(resolve => setTimeout(resolve, 3000)); 
        console.log("Review submitted! Thank you")
    }

}
module.exports=User
const A = new User("bev", 22, "64 zoo lane", "a@A.com", 111)
const b = new User("ww", 22, "64 zoo lane", "a@A.com", 111)
const c = new User("ee", 22, "64 zoo lane", "a@A.com", 111)
const d = new User("rr", 22, "64 zoo lane", "a@A.com", 111)
A.submitFeedback()

