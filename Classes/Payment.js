class Payment {

    name;
    type;
    cardNum;

    constructor(name, type, cardNum) {
        this.name = name;
        this.type = type;
        this.cardNum = cardNum;

    };

    async verifyBankDetails() { //timeout function
        if (Number.isInteger(this.cardNum)) {
            await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
            console.log("Card details entered");

        } else {
            throw new Error("You have not entered a string of numbers") //error 
        }
    };

    takePayment() { //when user return scooter to charging station
        //abstract method
        let a = console.log("Thank you! A payment of £4 has been taken :D ");  // £4 is random. will return to implement function that calculates cost :D
        return a;
    };



}

module.exports = Payment

