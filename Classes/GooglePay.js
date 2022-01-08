const Payment = require('./Payment')

class GooglePay extends Payment {

    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }

    async takePayment() {
        console.log("Calculating payment from Google Pay....");
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
        console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
    }
}

module.exports = GooglePay