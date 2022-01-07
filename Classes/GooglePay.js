const Payment = require('./Payment')

class GooglePay extends Payment{

    constructor(name){
        super(name)
        this.name=name;
    }

    async takePayment(){
            console.log("Calculating payment from your account....");
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
        }
    }

module.exports=GooglePay