
class Payment {

    name;
    type;

    constructor(name, type) {
        this.name = name;
        this.type = type;

    }

    async verifyBankDetails() { //timeout function
        const cardNum = prompt('What is your card number?');
        if (isNaN(cardNum)) {
            throw new ReferenceError("You have not entered a string of numbers")
        } else {
            await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
            console.log("Card details entered");
        }
    };

    takePayment() { //when user return scooter to charging station
        //abstract
        console.log("a");
    };



}

module.exports = Payment

