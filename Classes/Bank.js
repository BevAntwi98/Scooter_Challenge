const Payment = require('./Payment')
const prompt = require('prompt-sync')();

class Bank extends Payment {

    constructor(name) {
        super(name)
        this.name = name;
    }

    async verifyBankDetails() { //timeout function
        const cardNum = prompt('What is your card number?');
        if (isNaN(cardNum)) {
            throw new ReferenceError("You have not entered a string of numbers")
        } else {
            await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
            console.log("Card details entered"); //could import user here 
        }


    }
    async takePayment() {
        console.log("Calculating payment from your account....");
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
    }
}

module.exports = Bank
const b = new Bank("natwest")
b.verifyBankDetails()