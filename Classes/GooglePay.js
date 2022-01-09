const Payment = require('./Payment')

class GooglePay extends Payment {

    constructor(name, type) {
        super(name, type)
        this.name = name;
        this.type = type;
    }

    async takePayment() { // overriding
        console.log("Calculating payment from Google Pay....");
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
        let a =console.log("Thank you! A payment of £4 has been taken :D ");  // £4 is random. will return to implement function that calculates cost :D
        return a;
    }
}

module.exports = GooglePay