const Payment = require('./Payment')

class CardIssuer extends Payment {

    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }


    async takePayment() { //overriding
        console.log("Calculating payment from your card....");
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
        console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
    }
}

module.exports = CardIssuer