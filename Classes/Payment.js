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
        // abstract method
    };

    takePayment() { //when user return scooter to charging station
        //abstract method   
    };

}

module.exports = Payment

