const prompt = require('prompt-sync')();
class Payment {

    name;

    constructor(name) {
        this.name = name;

    }

    async verifyBankDetails() { //timeout function
        const cardNum = prompt('What is your card number?');
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
        console.log("Card details entered"); //could import user here 

    }

    async takePayment() { //when user return scooter to charging station
        console.log("Calculating payment....");
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
    }



}
module.exports = Payment

const p = new Payment();
// p.verifyBankDetails()
p.takePayment()