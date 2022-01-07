const Payment = require('./Payment')

class CardIssuer extends Payment{

    constructor(name){
        super(name)
        this.name=name;
    }

    verifyBankDetails(){

    }
    async takePayment(){
            console.log("Calculating payment from your card....");
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log("Thank you! A payment of ### has been taken :D ");  // implement function to calculate how much has been taken
        }
    }

module.exports=CardIssuer